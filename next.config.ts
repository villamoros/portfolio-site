import type { NextConfig } from "next";

// Dos formas de compilar:
// - `npm run build`: servidor de Next. Incluye /api/contact (necesita RESEND_API_KEY). Para Vercel.
// - `npm run build:static`: export estático en ./out, que usa el agente de escritorio para
//   empaquetar el portafolio. En esa versión el formulario no envía (no hay servidor).
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = isStaticExport ? { output: "export" } : {};

export default nextConfig;
