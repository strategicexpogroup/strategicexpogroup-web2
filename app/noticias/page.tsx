import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noticias",
  description: "Próximamente: noticias y comunicados de Strategic Expo Group."
};

export default function NoticiasPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-brand-primary">Noticias</h1>
      <p className="mt-4 text-brand-muted">
        Estamos preparando esta sección. Muy pronto encontrarás actualizaciones sobre nuestras ferias y eventos.
      </p>
      <Link href="/contacto" className="btn-primary mt-8 inline-flex">
        Contáctanos
      </Link>
    </div>
  );
}
