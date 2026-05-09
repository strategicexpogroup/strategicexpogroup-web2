import Link from "next/link";
import type { Metadata } from "next";
import { Banknote, Megaphone, Users } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { PartnerCarousel } from "@/components/partner-carousel";
import { partners } from "@/lib/data";

export const metadata: Metadata = {
  title: "Aliados estratégicos",
  description:
    "Conoce las oportunidades de alianza con Strategic Expo Group para aumentar visibilidad, leads y posicionamiento de marca."
};

const sponsorBenefits = [
  {
    title: "Visibilidad de marca",
    description: "Presencia destacada en eventos, piezas digitales y campañas previas al evento.",
    icon: Megaphone
  },
  {
    title: "Networking estratégico",
    description: "Conexión directa con tomadores de decisión, instituciones y aliados comerciales.",
    icon: Users
  },
  {
    title: "Retorno medible",
    description: "Activaciones orientadas a captación de leads, recordación y oportunidades de negocio.",
    icon: Banknote
  }
];

export default function AliadosEstrategicosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <SectionReveal className="rounded-3xl bg-gradient-to-r from-brand-primary to-sky-800 px-6 py-8 text-white sm:px-8 sm:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">Aliados estratégicos</p>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">Impulsa tu marca con eventos de alto impacto</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
          Conecta con audiencias calificadas y fortalece tu posicionamiento con alianzas y activaciones diseñadas para
          objetivos comerciales reales.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contacto?motivo=patrocinio" className="seg-brand-hover btn-ghost-light px-5 py-2.5">
            Solicitar propuesta
          </Link>
          <Link
            href="/nuestras-ferias"
            className="seg-brand-hover btn-secondary border-white/70 bg-white/10 px-5 py-2.5 text-white"
          >
            Ver eventos activos
          </Link>
        </div>
      </SectionReveal>

      <SectionReveal className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" delay={0.04}>
        {sponsorBenefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <article
              key={benefit.title}
              tabIndex={0}
              className="group ally-benefit-card seg-brand-hover card-elevated cursor-default p-0 outline-none focus-visible:ring-2 focus-visible:ring-[#17a3dd]/60 focus-visible:ring-offset-2"
            >
              <div className="relative z-10 p-5">
                <Icon
                  className="h-7 w-7 text-brand-primary transition-colors duration-300 group-hover:text-[#048240]"
                  aria-hidden
                />
                <h2 className="mt-3 text-base font-bold text-brand-primary">{benefit.title}</h2>
                <p className="mt-2 text-sm text-brand-muted">{benefit.description}</p>
              </div>
            </article>
          );
        })}
      </SectionReveal>

      <SectionReveal className="mt-8 rounded-2xl border border-slate-200 bg-white p-6" delay={0.08}>
        <h2 className="text-xl font-bold text-brand-primary">Aliados actuales</h2>
        <p className="mt-2 text-sm text-brand-muted">Entidades y marcas que ya confían en Strategic Expo Group.</p>
        <div className="mt-5">
          <PartnerCarousel partners={partners} />
        </div>
      </SectionReveal>
    </div>
  );
}
