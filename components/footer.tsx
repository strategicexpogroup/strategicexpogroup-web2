import Link from "next/link";
import { Instagram } from "lucide-react";
import { contactData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-20 bg-brand-text text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-bold tracking-wide">STRATEGIC EXPO GROUP</h2>
          <p className="mt-3 max-w-lg text-sm text-slate-300">
            Holding empresarial especializado en ferias, exposiciones y eventos de alto impacto en Colombia.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Enlaces rápidos</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/nosotros" className="transition hover:text-brand-accent">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/nuestras-ferias" className="transition hover:text-brand-accent">
                Nuestras ferias
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="transition hover:text-brand-accent">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contacto</h3>
          <p className="mt-3 text-sm">{contactData.phone}</p>
          <a
            href="https://instagram.com/strategicexpogroup"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm transition hover:text-brand-accent"
          >
            <Instagram size={16} />
            {contactData.instagram}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-400">
        © 2025 Strategic Expo Group SAS. Todos los derechos reservados.
      </div>
    </footer>
  );
}
