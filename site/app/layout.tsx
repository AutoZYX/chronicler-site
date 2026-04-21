import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import FloatingLangToggle from "@/components/lang-toggle-floating";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Chronicler · 观时者 — An AI-assisted time ledger you own",
  description:
    "Open-source macOS tool that observes your work across multiple identities, infers per-context time segments with AI, and writes bilingual daily digests to your Obsidian vault. Local-first. AGPLv3. Coming Q2 2026.",
  openGraph: {
    title: "Chronicler · 观时者",
    description:
      "Lyubishchev's time-accounting method, made cheap by AI. Observation, never judgment.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#c85a3a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&family=Newsreader:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <I18nProvider>
          <FloatingLangToggle />
          <main className="flex-1">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
