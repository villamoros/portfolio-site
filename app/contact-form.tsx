"use client";

import { useRef, useState, type FormEvent } from "react";

// Mensajes de estado. El idioma sale de <html lang>, que cambia el botón ES/EN de la página.
const MSG = {
  en: {
    sending: "Sending…",
    ok: "Thanks. Your message is on its way to me. I'll reply from my own email.",
    invalid: "Please check the fields.",
    fieldsLabel: "Needs a fix in",
    notServer: "This copy of the site has no form server (it is the offline/static version). Open the published site, or write to villamorosjuan@gmail.com.",
    notConfigured: "The form is not configured yet (missing email key on the server). Write to villamorosjuan@gmail.com.",
    rateLimited: "Too many messages from this connection. Please try again in a few minutes.",
    error: "The message could not be sent. Write to villamorosjuan@gmail.com directly.",
  },
  es: {
    sending: "Enviando…",
    ok: "Gracias. Tu mensaje ya va en camino. Te respondo desde mi correo.",
    invalid: "Revisa los campos.",
    fieldsLabel: "Corrige",
    notServer: "Esta copia del sitio no tiene el servidor del formulario (es la versión estática sin conexión). Abre el sitio publicado o escribe a villamorosjuan@gmail.com.",
    notConfigured: "El formulario aún no está configurado (falta la clave de correo en el servidor). Escribe a villamorosjuan@gmail.com.",
    rateLimited: "Demasiados mensajes desde esta conexión. Intenta de nuevo en unos minutos.",
    error: "No se pudo enviar el mensaje. Escribe directo a villamorosjuan@gmail.com.",
  },
} as const;

type Status = { kind: "idle" | "sending" | "ok" | "invalid" | "error"; text: string };

// Nombres de los campos para mostrar cuáles faltan.
const FIELD = {
  en: { name: "name (at least 2 letters)", email: "a valid email", message: "message (at least 10 characters)" },
  es: { name: "nombre (mínimo 2 letras)", email: "un correo válido", message: "mensaje (mínimo 10 caracteres)" },
} as const;

export default function ContactForm() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>({ kind: "idle", text: "" });
  const [busy, setBusy] = useState(false);

  const lang = (): "en" | "es" =>
    typeof document !== "undefined" && document.documentElement.lang === "es" ? "es" : "en";

  function open() {
    setStatus({ kind: "idle", text: "" });
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const m = MSG[lang()];
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setBusy(true);
    setStatus({ kind: "sending", text: m.sending });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        formRef.current?.reset();
        setStatus({ kind: "ok", text: m.ok });
      } else if (res.status === 400) {
        const data = (await res.json().catch(() => ({}))) as { fields?: string[] };
        const names = (data.fields ?? []).map(f => FIELD[lang()][f as keyof typeof FIELD.en] ?? f);
        setStatus({ kind: "invalid", text: names.length ? `${m.invalid} ${m.fieldsLabel}: ${names.join(", ")}.` : m.invalid });
      } else if (res.status === 403 || res.status === 404 || res.status === 405) {
        // Export estático (out/): no hay ruta /api/contact, así que no puede enviar.
        setStatus({ kind: "error", text: m.notServer });
      } else if (res.status === 429) {
        setStatus({ kind: "error", text: m.rateLimited });
      } else if (res.status === 500) {
        setStatus({ kind: "error", text: m.notConfigured });
      } else {
        setStatus({ kind: "error", text: m.error });
      }
    } catch {
      setStatus({ kind: "error", text: m.error });
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button className="btn primary big-btn" type="button" onClick={open} aria-haspopup="dialog" aria-controls="contact-dialog">
        <span data-i18n="c.mail">Write to me</span> <span aria-hidden="true">→</span>
      </button>

      <dialog
        id="contact-dialog"
        ref={dialogRef}
        className="contact-dialog"
        aria-labelledby="contact-title"
        onClick={e => {
          // clic en el fondo (fuera del contenido) cierra el modal
          if (e.target === dialogRef.current) close();
        }}
      >
        <form ref={formRef} className="contact-form" onSubmit={onSubmit} noValidate>
          <p className="label"><span>@</span><span data-i18n="contact.label">Contact</span></p>
          <h3 id="contact-title" data-i18n="contact.title">Write to me</h3>
          <p className="contact-lede" data-i18n="contact.lede">Your message comes straight to my inbox. I reply from my own email.</p>

          <div className="row">
            <div className="field">
              <label htmlFor="cf-name" data-i18n="contact.name">Name</label>
              <input id="cf-name" name="name" type="text" autoComplete="name" required minLength={2} maxLength={100} />
            </div>
            <div className="field">
              <label htmlFor="cf-email" data-i18n="contact.email">Email</label>
              <input id="cf-email" name="email" type="email" autoComplete="email" required maxLength={200} />
            </div>
          </div>

          <div className="field">
            <label htmlFor="cf-subject" data-i18n="contact.subject">Subject (optional)</label>
            <input id="cf-subject" name="subject" type="text" maxLength={150} />
          </div>

          <div className="field">
            <label htmlFor="cf-message" data-i18n="contact.message">Message</label>
            <textarea id="cf-message" name="message" rows={5} required minLength={10} maxLength={4000} />
          </div>

          {/* Campo trampa: oculto para personas, los bots lo llenan */}
          <div className="hp" aria-hidden="true">
            <label htmlFor="cf-website">Website</label>
            <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <p className={`contact-status ${status.kind}`} role="status" aria-live="polite">{status.text}</p>

          <div className="actions">
            <button className="pill" type="button" onClick={close} data-i18n="contact.cancel">Cancel</button>
            <button className="btn primary" type="submit" disabled={busy} data-i18n="contact.send">Send message</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
