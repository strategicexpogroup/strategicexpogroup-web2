import Image from "next/image";
import Link from "next/link";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { assetPaths } from "@/lib/assets";
import { contactData, fairs } from "@/lib/data";
import { FooterNewsletter } from "@/components/footer-newsletter";

export function Footer() {
  return (
    <footer className="mt-16 bg-brand-primary text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-1">
            <Image
              src={assetPaths.logos.white}
              alt="Strategic Expo Group"
              width={240}
              height={44}
              className="h-10 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Conectamos industrias, creamos oportunidades.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com/strategicexpogroup"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Enlaces</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="transition hover:text-white">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/nuestras-ferias" className="transition hover:text-white">
                  Ferias
                </Link>
              </li>
              <li>
                <Link href="/aliados-estrategicos" className="transition hover:text-white">
                  Aliados estratégicos
                </Link>
              </li>
              <li>
                <Link href="/stands" className="transition hover:text-white">
                  Stands
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="transition hover:text-white">
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="transition hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Nuestras ferias</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {fairs.map((fair) => (
                <li key={fair.slug}>
                  <Link href={`/nuestras-ferias/${fair.slug}`} className="transition hover:text-white">
                    {fair.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/nuestras-ferias" className="transition hover:text-white">
                  Ver todas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contáctanos</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden />
                <span>{contactData.phone}</span>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden />
                <span>{contactData.email}</span>
              </li>
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden />
                <span>{contactData.address}</span>
              </li>
              <li className="flex gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden />
                <span>{contactData.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Newsletter</h3>
            <p className="mt-3 text-sm text-slate-300">Recibe novedades sobre nuestras ferias y eventos.</p>
            <FooterNewsletter />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-400">
        © 2025 Strategic Expo Group SAS. Todos los derechos reservados.
      </div>
    </footer>
  );
}
