import type { Metadata } from "next";
import { BadgeCheck, Building2, Flag, Lightbulb, Target, Trophy } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { companyData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce quiénes somos en Strategic Expo Group: misión, visión, valores corporativos y líneas de negocio."
};

export default function NosotrosPage() {
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

      <SectionReveal className="mt-6 rounded-2xl border border-slate-200 bg-white p-6" delay={0.1}>
        <h2 className="text-lg font-bold text-brand-primary">Valores corporativos</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {companyData.values.map((value) => (
            <li key={value} className="rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-brand-text">
              {value}
            </li>
          ))}
        </ul>
      </SectionReveal>

      <SectionReveal className="mt-6 rounded-2xl border border-slate-200 bg-white p-6" delay={0.12}>
        <h2 className="text-lg font-bold text-brand-primary">Líneas de negocio</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {companyData.businessLines.map((line) => (
            <li key={line} className="rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-brand-text">
              {line}
            </li>
          ))}
        </ul>
      </SectionReveal>
    </div>
  );
}
