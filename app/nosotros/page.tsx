import type { Metadata } from "next";
import { SectionReveal } from "@/components/section-reveal";
import { companyData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce quiénes somos en Strategic Expo Group: misión, visión, valores corporativos y líneas de negocio."
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-brand-text sm:text-4xl">Nosotros</h1>

      <SectionReveal className="mt-8 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-xl font-bold text-brand-primary">¿Quiénes Somos?</h2>
        <p className="mt-4 leading-relaxed text-brand-muted">{companyData.description}</p>
      </SectionReveal>

      <SectionReveal className="mt-8 grid gap-6 lg:grid-cols-2" delay={0.05}>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-brand-primary">Misión</h2>
          <p className="mt-3 text-brand-muted">{companyData.mission}</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-brand-primary">Visión</h2>
          <p className="mt-3 text-brand-muted">{companyData.vision}</p>
        </article>
      </SectionReveal>

      <SectionReveal className="mt-8 rounded-2xl border border-slate-200 bg-white p-6" delay={0.1}>
        <h2 className="text-lg font-bold text-brand-primary">Valores corporativos</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {companyData.values.map((value) => (
            <li key={value} className="rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-brand-text">
              {value}
            </li>
          ))}
        </ul>
      </SectionReveal>

      <SectionReveal className="mt-8 rounded-2xl border border-slate-200 bg-white p-6" delay={0.12}>
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
