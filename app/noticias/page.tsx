import Link from "next/link";
import type { Metadata } from "next";
import { CalendarDays, Newspaper, Sparkles, TrendingUp } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

export const metadata: Metadata = {
  title: "Noticias",
  description: "Próximamente: noticias y comunicados de Strategic Expo Group."
};

export default function NoticiasPage() {
  const mockNews = [
    {
      title: "Apertura oficial de la agenda 2026",
      excerpt: "Anunciamos nuevas fechas y oportunidades para marcas, instituciones y aliados estratégicos.",
      category: "Comunicado",
      date: "Mayo 2026"
    },
    {
      title: "Tendencias en experiencias feriales",
      excerpt: "Claves para lograr stands más memorables y aumentar el retorno comercial de tu participación.",
      category: "Artículo",
      date: "Abril 2026"
    },
    {
      title: "Nuevos aliados en el ecosistema regional",
      excerpt: "Seguimos sumando organizaciones para impulsar ferias con mayor alcance e impacto.",
      category: "Alianzas",
      date: "Marzo 2026"
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <SectionReveal className="rounded-3xl border border-slate-200 bg-white px-6 py-7 sm:px-8 sm:py-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
          <Newspaper className="h-4 w-4" aria-hidden />
          Centro de noticias
        </div>
        <h1 className="mt-3 text-3xl font-extrabold text-brand-primary sm:text-4xl">Novedades y comunicados</h1>
        <p className="mt-3 max-w-3xl text-sm text-brand-muted sm:text-base">
          Publicaremos avances de ferias, alianzas, tendencias y contenido útil para expositores y patrocinadores.
        </p>
      </SectionReveal>

      <SectionReveal className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" delay={0.04}>
        <div className="card-elevated p-4">
          <TrendingUp className="h-5 w-5 text-brand-primary" aria-hidden />
          <p className="mt-2 text-sm font-semibold text-brand-primary">Tendencias del sector</p>
        </div>
        <div className="card-elevated p-4">
          <CalendarDays className="h-5 w-5 text-brand-primary" aria-hidden />
          <p className="mt-2 text-sm font-semibold text-brand-primary">Agenda de eventos</p>
        </div>
        <div className="card-elevated p-4">
          <Sparkles className="h-5 w-5 text-brand-primary" aria-hidden />
          <p className="mt-2 text-sm font-semibold text-brand-primary">Casos destacados</p>
        </div>
      </SectionReveal>

      <SectionReveal className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3" delay={0.08}>
        {mockNews.map((item) => (
          <article key={item.title} className="card-elevated p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">{item.category}</p>
            <h2 className="mt-2 text-lg font-bold text-brand-primary">{item.title}</h2>
            <p className="mt-2 text-sm text-brand-muted">{item.excerpt}</p>
            <p className="mt-3 text-xs font-semibold text-brand-text">{item.date}</p>
          </article>
        ))}
      </SectionReveal>

      <SectionReveal className="mt-6 rounded-2xl bg-brand-primary px-6 py-6 text-center text-white sm:text-left" delay={0.1}>
        <p className="text-sm text-slate-200">¿Quieres recibir novedades por correo o WhatsApp?</p>
        <Link href="/contacto" className="btn-ghost-light mt-3 inline-flex px-5 py-2.5">
          Solicitar actualizaciones
        </Link>
      </SectionReveal>
    </div>
  );
}
