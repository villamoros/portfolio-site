import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono, Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { SITE_URL } from "./site";

// Fuentes alojadas con el sitio (sin pedirlas a Google en cada visita).
const serif = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
const sans = Poppins({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23141312'/%3E%3Ctext x='32' y='44' font-family='Georgia,serif' font-size='34' fill='%23f3eee4' text-anchor='middle' font-style='italic'%3EJV%3C/text%3E%3Ccircle cx='50' cy='16' r='5' fill='%23d6452f'/%3E%3C/svg%3E";

const TITLE = "Juan Villamoros · Software Developer (Ruby on Rails, Python, AI agents)";
const DESCRIPTION =
  "Juan Villamoros — software developer from Colombia with a business-management background. Ruby on Rails APIs, integrations, Python automation and AI agents. Remote (UTC−5), available immediately.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: TITLE,
    description: "Ruby on Rails, Python, integrations and AI agents. Remote from Colombia, available immediately.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Juan Villamoros · Systems Engineer" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og.png"] },
  robots: { index: true, follow: true },
  icons: { icon: FAVICON },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3eee4",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
