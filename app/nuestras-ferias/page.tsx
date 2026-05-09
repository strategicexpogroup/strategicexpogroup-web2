import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CalendarFold, MapPin, SquareArrowOutUpRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { StaggerGrid, StaggerItem } from "@/components/stagger-grid";
import { fairs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nuestras ferias",
  description: "Explora las ferias y eventos organizados por Strategic Expo Group en Colombia."
};

export default function NuestrasFeriasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <h1 className="text-3xl font-extrabold text-brand-text sm:text-4xl">Nuestras ferias</h1>
      <p className="mt-3 max-w-3xl text-brand-muted">
        Conoce nuestras plataformas de alto impacto diseñadas para conectar industria, educación, empresa y sociedad.
      </p>

      <SectionReveal>
        <StaggerGrid className="mt-6 grid gap-4 md:grid-cols-2">
        {fairs.map((fair) => (
          <StaggerItem key={fair.slug}>
            <article className="card-elevated grid overflow-hidden md:grid-cols-5">
              <div className="relative aspect-[3/4] min-h-[200px] w-full md:col-span-2 md:aspect-[4/5] md:min-h-[260px]">
                <Image
                  src={fair.listCardImage ?? fair.featuredImage}
                  alt={`Imagen — ${fair.name}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#162134]/45 via-transparent to-transparent md:bg-gradient-to-r"
                  aria-hidden
                />
              </div>
              <div className="flex flex-col p-6 md:col-span-3">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
                    {fair.dateLabel}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-muted">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    {fair.location}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-bold text-brand-text">
                  {fair.name} – {fair.tagline}
                </h2>
                <p className="mt-3 flex-1 text-sm text-brand-muted">{fair.shortDescription}</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-brand-primary">
                    <CalendarFold className="mb-1 h-4 w-4" aria-hidden />
                    Agenda activa
                  </div>
                  <div className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-brand-primary">
                    <SquareArrowOutUpRight className="mb-1 h-4 w-4" aria-hidden />
                    Oportunidad comercial
                  </div>
                </div>
                <Link href={`/nuestras-ferias/${fair.slug}`} className="btn-primary mt-5 w-fit px-4 py-2">
                  Ver detalle
                </Link>
              </div>
            </article>
          </StaggerItem>
        ))}
        </StaggerGrid>
      </SectionReveal>
    </div>
  );
}
