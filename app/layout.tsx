import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { LayoutShell } from "@/components/layout-shell";
import { readWeb3AccessKeyForClient } from "@/lib/web3forms-env";

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
  const web3AccessKey = readWeb3AccessKeyForClient();

  return (
    <html lang="es">
      <body className={`${montserrat.className} ${montserrat.variable}`}>
        <LayoutShell web3AccessKey={web3AccessKey}>{children}</LayoutShell>
      </body>
    </html>
  );
}
