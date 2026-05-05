import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  GraduationCap,
  Handshake,
  MapPin,
  Megaphone,
  Mic2,
  Presentation,
  Store,
  Users
} from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { PartnerCarousel } from "@/components/partner-carousel";
import { SectionReveal } from "@/components/section-reveal";
import { StaggerGrid, StaggerItem } from "@/components/stagger-grid";
import { assetPaths } from "@/lib/assets";
import { fairs, partners, serviceLines } from "@/lib/data";

const icons = [
  Building2,
  BriefcaseBusiness,
  Presentation,
  Megaphone,
  Handshake,
  CalendarDays
];

const fairSidebarIcons = [Store, Mic2, GraduationCap, Users, Handshake];

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
  const fairSidebar = featuredFair.offerings.slice(0, 5);

  return (
    <div className="bg-brand-neutral">
      <HomeHero />

      <SectionReveal className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-brand-primary md:text-3xl">Nuestras líneas</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-brand-muted">
          Soluciones integrales para ferias, congresos y activaciones de alto impacto.
        </p>
        <StaggerGrid className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {serviceLines.map((item, index) => {
            const Icon = icons[index];
            return (
              <StaggerItem key={item.title}>
                <article className="card-elevated flex h-full flex-col rounded-xl p-5 text-center xl:text-left">
                  <Icon className="mx-auto text-brand-primary xl:mx-0" size={26} strokeWidth={1.75} />
                  <h3 className="mt-3 text-sm font-bold text-brand-primary">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-brand-muted">{item.description}</p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </SectionReveal>

      <SectionReveal className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" delay={0.05}>
        <h2 className="text-center text-2xl font-bold text-brand-primary md:text-3xl">Nuestras ferias</h2>
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-soft">
          <div className="grid lg:grid-cols-12 lg:gap-0">
            <div className="flex flex-col justify-center gap-5 border-b border-slate-100 p-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10">
              <Image
                src={assetPaths.logos.feriaEducacionCaribe}
                alt={featuredFair.name}
                width={200}
                height={120}
                className="h-auto w-44 object-contain"
              />
              <div>
                <h3 className="text-xl font-extrabold leading-snug text-brand-primary md:text-2xl">
                  {featuredFair.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-accent">{featuredFair.tagline}</p>
              </div>
              <p className="text-sm leading-relaxed text-brand-muted">{featuredFair.shortDescription}</p>
              <ul className="space-y-2 text-sm text-brand-text">
                <li className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 shrink-0 text-brand-primary" aria-hidden />
                  <span>{featuredFair.dateLabel}</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-brand-primary" aria-hidden />
                  <span>{featuredFair.location}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 shrink-0 text-brand-primary" aria-hidden />
                  <span>Gran afluencia estudiantil y familiar esperada</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/contacto?motivo=stand" className="btn-primary px-4 py-2 text-sm">
                  Solicitar stand
                </Link>
                <Link href={`/nuestras-ferias/${featuredFair.slug}`} className="btn-accent px-4 py-2 text-sm">
                  Ver feria
                </Link>
                <Link href="/contacto?motivo=patrocinio" className="btn-secondary bg-transparent px-4 py-2 text-sm">
                  Ser patrocinador
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center bg-brand-neutral p-6 lg:col-span-4 lg:items-stretch lg:p-8">
              <div className="relative w-full max-w-[280px] overflow-hidden rounded-2xl shadow-lg lg:max-w-none lg:rounded-3xl">
                <Image
                  src={assetPaths.images.eventEducationCaribe}
                  alt={featuredFair.name}
                  width={400}
                  height={520}
                  className="h-full min-h-[280px] w-full object-cover lg:min-h-[420px]"
                  sizes="(max-width: 1024px) 90vw, 33vw"
                />
              </div>
            </div>

            <div className="bg-brand-primary p-8 text-white lg:col-span-3 lg:py-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">En el evento</p>
              <ul className="mt-6 space-y-4">
                {fairSidebar.map((line, i) => {
                  const Icon = fairSidebarIcons[i] ?? Handshake;
                  return (
                    <li key={line} className="flex gap-3 text-sm leading-snug text-slate-100">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                      <span>{line}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="patrocinadores" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" delay={0.08}>
        <h2 className="text-center text-2xl font-bold text-brand-primary md:text-3xl">Aliados y patrocinadores</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-brand-muted">
          Instituciones que acompañan nuestras ferias y fortalecen el ecosistema regional.
        </p>
        <div className="mt-8">
          <PartnerCarousel partners={partners} />
        </div>
      </SectionReveal>

      <SectionReveal className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" delay={0.1}>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-accent to-teal-600 px-6 py-12 text-white shadow-xl sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-8 lg:py-14">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/30">
              <Users className="h-8 w-8" aria-hidden />
            </div>
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">¿Quieres ser parte de nuestros eventos?</h2>
              <p className="mt-2 max-w-xl text-sm text-white/90">
                Hablemos de stands, patrocinios y alianzas para tu próxima participación.
              </p>
            </div>
          </div>
          <Link
            href="/contacto"
            className="btn-ghost-light mt-8 inline-flex px-8 py-3 lg:mt-0"
          >
            Contáctanos
          </Link>
        </div>
      </SectionReveal>
    </div>
  );
}
