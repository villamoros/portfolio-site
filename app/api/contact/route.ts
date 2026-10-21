import { NextResponse } from "next/server";
import { Resend } from "resend";

// El destino es fijo: el mensaje siempre llega a este correo, nunca a una dirección que escriba el visitante.
const TO = "villamorosjuan@gmail.com";
// Remitente de prueba de Resend: solo entrega al correo dueño de la cuenta (el de arriba).
// Cuando tengas un dominio verificado, cámbialo aquí.
const FROM = "Portafolio <onboarding@resend.dev>";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Protecciones anti-abuso
const MAX_BODY_BYTES = 12_000;   // el mensaje más largo permitido cabe de sobra
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;              // envíos válidos por IP en la ventana
const hits = new Map<string, number[]>(); // en memoria: suficiente para un sitio personal

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Recorta y limpia cualquier valor que llegue del navegador.
function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

function clientIp(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
}

// Cuenta solo envíos válidos. Devuelve false si esta IP ya agotó su cupo.
function withinRateLimit(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(t => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);
  return true;
}

export async function POST(req: Request) {
  // Solo acepta peticiones desde este mismo sitio (evita que otras páginas usen el formulario).
  const origin = req.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== req.headers.get("host")) {
        return NextResponse.json({ error: "forbidden" }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: "forbidden" }, { status: 403 });
    }
  }

  if (Number(req.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "too_large" }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  // Campo trampa: una persona no lo ve, los bots sí lo llenan. Respondemos OK y no enviamos nada.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 200);
  const subject = clean(body.subject, 150);
  const message = typeof body.message === "string" ? body.message.trim().slice(0, 4000) : "";

  // Indica qué campos fallaron para que el formulario los señale.
  const fields: string[] = [];
  if (name.length < 2) fields.push("name");
  if (!EMAIL_RE.test(email)) fields.push("email");
  if (message.length < 10) fields.push("message");
  if (fields.length > 0) {
    return NextResponse.json({ error: "invalid", fields }, { status: 400 });
  }

  if (!withinRateLimit(clientIp(req))) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: email,
    subject: `[Portafolio] ${subject || "Nuevo mensaje"} · ${name}`,
    text: `De: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    // Motivo exacto solo para el registro del servidor; el visitante no lo ve.
    console.error("[contact] Resend rejected the message:", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
