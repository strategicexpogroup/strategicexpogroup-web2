import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PartnerCarousel } from "@/components/partner-carousel";
import { SectionReveal } from "@/components/section-reveal";
import { assetPaths } from "@/lib/assets";
import { fairs, partners } from "@/lib/data";

type FairDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return fairs.map((fair) => ({ slug: fair.slug }));
}

export async function generateMetadata({ params }: FairDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const fair = fairs.find((item) => item.slug === slug);
  if (!fair) {
    return {
      title: "Feria no encontrada"
    };
  }

  return {
    title: fair.name,
    description: fair.shortDescription,
    openGraph: {
      title: `${fair.name} - ${fair.tagline}`,
      description: fair.shortDescription,
      images: [fair.featuredImage],
      url: `/nuestras-ferias/${fair.slug}`
    }
  };
}

export default async function FairDetailPage({ params }: FairDetailPageProps) {
  const { slug } = await params;
  const fair = fairs.find((item) => item.slug === slug);

  if (!fair) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="inline-flex rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
        {fair.upcomingLabel}
      </div>
      <h1 className="mt-4 text-3xl font-extrabold text-brand-text sm:text-4xl">{fair.name}</h1>
      <p className="mt-2 text-lg text-brand-muted">{fair.tagline}</p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <Image src={fair.featuredImage} alt={fair.name} width={1200} height={600} className="h-auto w-full object-cover" />
      </div>

      <SectionReveal className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-sm font-semibold text-brand-primary">Próximamente en 2026</p>
        <p className="mt-2 text-sm text-brand-muted">
          Las fechas exactas del evento se anunciarán pronto.
        </p>
        <p className="mt-3 text-sm font-medium text-brand-text">{fair.location}</p>
      </SectionReveal>

      <SectionReveal className="mt-8 rounded-2xl border border-slate-200 bg-white p-6" delay={0.05}>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-xl font-bold text-brand-primary">Quienes somos los organizadores</h2>
            <p className="mt-3 leading-relaxed text-brand-muted">{fair.longDescription}</p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
            <Image
              src={assetPaths.images.eventEducationCaribe}
              alt="Imagen oficial de la Feria Educación Caribe"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="mt-8 grid gap-6 lg:grid-cols-2" delay={0.1}>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-brand-primary">Misión de la feria</h2>
          <p className="mt-3 text-brand-muted">{fair.mission}</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-brand-primary">Visión de la feria</h2>
          <p className="mt-3 text-brand-muted">{fair.vision}</p>
        </article>
      </SectionReveal>

      <SectionReveal className="mt-8 grid gap-6 lg:grid-cols-3" delay={0.12}>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-brand-primary">Lo que ofrece</h2>
          <ul className="mt-3 space-y-2 text-sm text-brand-muted">
            {fair.offerings.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-brand-primary">¿A quién está dirigido?</h2>
          <ul className="mt-3 space-y-2 text-sm text-brand-muted">
            {fair.targetAudience.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-brand-primary">¿Por qué participar?</h2>
          <ul className="mt-3 space-y-2 text-sm text-brand-muted">
            {fair.whyParticipate.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </SectionReveal>

      <SectionReveal className="mt-8 rounded-2xl border border-slate-200 bg-white p-6" delay={0.14}>
        <h2 className="text-lg font-bold text-brand-primary">Componente internacional</h2>
        <p className="mt-3 text-brand-muted">{fair.internationalComponent}</p>
      </SectionReveal>

      <SectionReveal className="mt-8 rounded-2xl border border-slate-200 bg-white p-6" delay={0.16}>
        <h2 className="text-lg font-bold text-brand-primary">Patrocinadores del evento</h2>
        <div className="mt-4">
          <PartnerCarousel partners={partners} />
        </div>
      </SectionReveal>

      <section className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/contacto?motivo=stand"
          className="btn-primary"
        >
          Solicita tu stand
        </Link>
        <Link
          href="/contacto?motivo=patrocinio"
          className="btn-secondary"
        >
          Conviértete en patrocinador
        </Link>
      </section>
    </div>
  );
}
