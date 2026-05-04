import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { LayoutShell } from "@/components/layout-shell";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: {
    default: "Strategic Expo Group",
    template: "%s | Strategic Expo Group"
  },
  description:
    "Holding empresarial especializado en la conceptualización, estructuración y ejecución de ferias, exposiciones y eventos de alto impacto en Colombia.",
  metadataBase: new URL("https://www.strategicexpogroup.com"),
  openGraph: {
    title: "Strategic Expo Group",
    description:
      "Holding empresarial especializado en la conceptualización, estructuración y ejecución de ferias, exposiciones y eventos de alto impacto en Colombia.",
    url: "https://www.strategicexpogroup.com",
    siteName: "Strategic Expo Group",
    locale: "es_CO",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic Expo Group",
    description:
      "Holding empresarial especializado en la conceptualización, estructuración y ejecución de ferias, exposiciones y eventos de alto impacto en Colombia."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} ${montserrat.variable}`}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
