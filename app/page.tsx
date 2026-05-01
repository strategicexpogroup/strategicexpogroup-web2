import Link from "next/link";
import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Handshake,
  Megaphone,
  Presentation
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { StaggerGrid, StaggerItem } from "@/components/stagger-grid";
import { allies, fairs, serviceLines } from "@/lib/data";

const icons = [
  Building2,
  BriefcaseBusiness,
  Presentation,
  Megaphone,
  Handshake,
  CalendarDays
];

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Conectamos industrias, creamos oportunidades. Organizamos ferias, congresos y exposiciones que impulsan negocios y desarrollo regional.",
  openGraph: {
    title: "Strategic Expo Group",
    description:
      "Conectamos industrias, creamos oportunidades. Organizamos ferias, congresos y exposiciones que impulsan negocios y desarrollo regional.",
    url: "/"
  }
};

export default function HomePage() {
  const featuredFair = fairs[0];

  return (
    <div>
      <SectionReveal className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-primary">
            Strategic Expo Group
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-brand-text sm:text-5xl">
            Conectamos industrias, creamos oportunidades.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-muted">
            Organizamos ferias, congresos y exposiciones que impulsan negocios, fortalecen comunidades y proyectan el
            desarrollo de la región.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/nuestras-ferias"
              className="btn-primary px-5 py-3"
            >
              Nuestras ferias
            </Link>
            <Link
              href="/contacto"
              className="btn-secondary px-5 py-3"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" delay={0.05}>
        <h2 className="text-2xl font-bold text-brand-text">Nuestras líneas</h2>
        <StaggerGrid className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceLines.map((item, index) => {
            const Icon = icons[index];
            return (
              <StaggerItem key={item.title}>
                <article className="card-elevated rounded-xl p-5">
                  <Icon className="text-brand-accent" size={22} />
                  <h3 className="mt-3 font-semibold text-brand-text">{item.title}</h3>
                  <p className="mt-2 text-sm text-brand-muted">{item.description}</p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </SectionReveal>

      <SectionReveal className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" delay={0.1}>
        <div className="rounded-2xl bg-brand-primary p-8 text-white">
          <div className="mb-4 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase">
            {featuredFair.upcomingLabel}
          </div>
          <h2 className="text-2xl font-bold">{featuredFair.name} – {featuredFair.tagline}</h2>
          <p className="mt-2 text-sm text-blue-100">{featuredFair.dateLabel}</p>
          <p className="mt-1 text-sm text-blue-100">Barranquilla, Colombia – Evento presencial</p>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-blue-50">{featuredFair.shortDescription}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contacto?motivo=stand"
              className="btn-accent px-4 py-2"
            >
              Solicitar stand
            </Link>
            <Link
              href={`/nuestras-ferias/${featuredFair.slug}`}
              className="inline-flex rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Ver feria
            </Link>
            <Link
              href="/contacto?motivo=patrocinio"
              className="inline-flex rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Ser patrocinador
            </Link>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" delay={0.12}>
        <h2 className="text-2xl font-bold text-brand-text">Aliados y patrocinadores</h2>
        <StaggerGrid className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allies.map((ally) => (
            <StaggerItem key={ally}>
              <div className="card-elevated rounded-xl p-5 text-center text-sm font-semibold">{ally}</div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </SectionReveal>

      <SectionReveal className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" delay={0.14}>
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center">
          <h2 className="text-2xl font-bold text-brand-text">¿Quieres ser parte de nuestros eventos?</h2>
          <Link
            href="/contacto"
            className="btn-primary mt-5 px-5 py-3"
          >
            Conversemos
          </Link>
        </div>
      </SectionReveal>

      <SectionReveal className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8" delay={0.16}>
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-2xl font-bold text-brand-text">Contáctanos</h2>
          <p className="mt-2 text-sm text-brand-muted">Recibe novedades sobre nuestras ferias y eventos.</p>
          <form className="mt-5 flex flex-col gap-3 sm:flex-row" aria-label="Formulario de newsletter">
            <input
              type="email"
              required
              placeholder="Tu correo electrónico"
              className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
            />
            <button
              type="submit"
              className="btn-accent"
            >
              Suscribirse
            </button>
          </form>
          <Link href="/contacto" className="mt-4 inline-block text-sm font-medium text-brand-primary hover:underline">
            Ir al formulario completo de contacto
          </Link>
        </div>
      </SectionReveal>
    </div>
  );
}
