import Link from "next/link";
import type { Metadata } from "next";
import { SectionReveal } from "@/components/section-reveal";
import { StaggerGrid, StaggerItem } from "@/components/stagger-grid";
import { fairs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nuestras ferias",
  description: "Explora las ferias y eventos organizados por Strategic Expo Group en Colombia."
};

export default function NuestrasFeriasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-brand-text sm:text-4xl">Nuestras ferias</h1>
      <p className="mt-3 max-w-3xl text-brand-muted">
        Conoce nuestras plataformas de alto impacto diseñadas para conectar industria, educación, empresa y sociedad.
      </p>

      <SectionReveal>
        <StaggerGrid className="mt-8 grid gap-6 md:grid-cols-2">
        {fairs.map((fair) => (
          <StaggerItem key={fair.slug}>
            <article className="card-elevated p-6">
              <div className="inline-flex rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
                {fair.dateLabel}
              </div>
              <h2 className="mt-4 text-xl font-bold text-brand-text">
                {fair.name} – {fair.tagline}
              </h2>
              <p className="mt-3 text-sm text-brand-muted">{fair.shortDescription}</p>
              <p className="mt-3 text-sm font-medium text-brand-text">{fair.location}</p>
              <Link href={`/nuestras-ferias/${fair.slug}`} className="btn-primary mt-5 px-4 py-2">
                Ver detalle
              </Link>
            </article>
          </StaggerItem>
        ))}
        </StaggerGrid>
      </SectionReveal>
    </div>
  );
}
