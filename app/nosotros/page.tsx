import type { Metadata } from "next";
import {
  Award,
  BadgeCheck,
  Building2,
  Flag,
  Handshake,
  LampDesk,
  LayoutTemplate,
  Lightbulb,
  MapPin,
  PenLine,
  Printer,
  Shield,
  Target,
  Trophy
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { companyData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce quiénes somos en Strategic Expo Group: misión, visión, valores corporativos y líneas de negocio."
};

const valueIcons = [Lightbulb, Award, Shield, MapPin, Handshake] as const;
const businessLineIcons = [PenLine, LayoutTemplate, LampDesk, Printer] as const;

function variantFor(index: number, offset: number): 0 | 1 | 2 | 3 {
  return ((index + offset) % 4) as 0 | 1 | 2 | 3;
}

export default function NosotrosPage() {
  const valueRows = companyData.values.map((text, i) => ({
    text,
    icon: valueIcons[i % valueIcons.length],
    variant: variantFor(i, 0)
  }));
  const lineRows = companyData.businessLines.map((text, i) => ({
    text,
    icon: businessLineIcons[i % businessLineIcons.length],
    variant: variantFor(i, 2)
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <SectionReveal className="rounded-3xl bg-gradient-to-r from-brand-primary to-sky-900 px-6 py-8 text-white sm:px-8 sm:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">Sobre nosotros</p>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">Estrategia, ejecución y resultados</h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-200 sm:text-base">{companyData.description}</p>
      </SectionReveal>

      <SectionReveal className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" delay={0.03}>
        {[
          { label: "Holding especializado", icon: Building2 },
          { label: "Eventos de alto impacto", icon: Trophy },
          { label: "Innovación continua", icon: Lightbulb },
          { label: "Compromiso regional", icon: Flag }
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="card-elevated p-4">
              <Icon className="h-5 w-5 text-brand-primary" aria-hidden />
              <p className="mt-2 text-sm font-semibold text-brand-primary">{item.label}</p>
            </div>
          );
        })}
      </SectionReveal>

      <SectionReveal className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold text-brand-primary">¿Quiénes Somos?</h2>
        <p className="mt-4 leading-relaxed text-brand-muted">{companyData.description}</p>
      </SectionReveal>

      <SectionReveal className="mt-6 grid gap-4 lg:grid-cols-2" delay={0.05}>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <Target className="h-6 w-6 text-brand-accent" aria-hidden />
          <h2 className="text-lg font-bold text-brand-primary">Misión</h2>
          <p className="mt-3 text-brand-muted">{companyData.mission}</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <BadgeCheck className="h-6 w-6 text-brand-accent" aria-hidden />
          <h2 className="text-lg font-bold text-brand-primary">Visión</h2>
          <p className="mt-3 text-brand-muted">{companyData.vision}</p>
        </article>
      </SectionReveal>

      <SectionReveal className="mt-6 grid gap-6 lg:grid-cols-2" delay={0.1}>
        {/* Izquierda: valores corporativos */}
        <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
          <h2 className="text-lg font-bold text-brand-primary">Valores corporativos</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {valueRows.map(({ text, icon: Icon, variant }) => (
              <li key={text} tabIndex={0} data-variant={variant} className="nosotros-pill">
                <Icon className="nosotros-pill-icon h-5 w-5" strokeWidth={1.85} aria-hidden />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Derecha: líneas de negocio */}
        <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
          <h2 className="text-lg font-bold text-brand-primary">Líneas de negocio</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {lineRows.map(({ text, icon: Icon, variant }) => (
              <li key={text} tabIndex={0} data-variant={variant} className="nosotros-pill">
                <Icon className="nosotros-pill-icon h-5 w-5" strokeWidth={1.85} aria-hidden />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </article>
      </SectionReveal>
    </div>
  );
}
