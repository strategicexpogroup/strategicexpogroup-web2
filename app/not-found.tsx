import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-brand-text">Página no encontrada</h1>
      <p className="mt-3 text-brand-muted">La ruta que intentas abrir no existe o fue movida.</p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-primary/90"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
