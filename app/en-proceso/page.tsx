import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteLockForm } from "@/components/site-lock-form";

export const metadata: Metadata = {
  title: "Página en proceso",
  robots: {
    index: false,
    follow: false
  }
};

export default function EnProcesoPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft">
        <p className="inline-flex rounded-full bg-brand-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900">
          Acceso temporal
        </p>
        <h1 className="mt-4 text-3xl font-extrabold text-brand-text">Página en proceso</h1>
        <p className="mt-3 text-brand-muted">
          Estamos realizando ajustes antes del lanzamiento. Ingresa el PIN para visualizar el sitio.
        </p>
        <Suspense
          fallback={<p className="mt-6 text-sm text-brand-muted">Cargando acceso...</p>}
        >
          <SiteLockForm />
        </Suspense>
      </div>
    </section>
  );
}
