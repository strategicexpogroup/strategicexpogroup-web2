import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Boxes, Compass, DraftingCompass, Paintbrush2, Ruler, Wrench } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { assetPaths } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Stands",
  description:
    "Diseño y fabricación de stands para ferias y eventos: propuestas modulares, custom y experiencias de marca."
};

const standServices = [
  {
    title: "Concepto y diseño",
    detail: "Desarrollo visual y funcional de tu espacio según objetivos comerciales.",
    icon: Compass
  },
  {
    title: "Producción integral",
    detail: "Fabricación, montaje y desmontaje con control técnico en sitio.",
    icon: Wrench
  },
  {
    title: "Branding del stand",
    detail: "Impresión gran formato, señalética e identidad aplicada al espacio.",
    icon: Paintbrush2
  },
  {
    title: "Stands modulares",
    detail: "Alternativas optimizadas para presupuesto y rapidez de instalación.",
    icon: Boxes
  },
  {
    title: "Stands custom",
    detail: "Diseños personalizados para lanzamientos o exhibiciones premium.",
    icon: DraftingCompass
  },
  {
    title: "Optimización del espacio",
    detail: "Distribución estratégica para flujo, interacción y captación de leads.",
    icon: Ruler
  }
];

const galleryImages = [
  {
    src: assetPaths.images.hero,
    alt: "Ambiente de feria y montaje de stands",
    sizes: "(max-width: 1024px) 100vw, 40vw"
  },
  {
    src: assetPaths.images.eventEducationCaribe,
    alt: "Evento corporativo Strategic Expo Group",
    sizes: "(max-width: 1024px) 50vw, 20vw"
  },
  {
    src: assetPaths.images.feriaEducacionCover,
    alt: "Experiencia de marca en exposición",
    sizes: "(max-width: 1024px) 50vw, 20vw"
  }
] as const;

export default function StandsPage() {
  const [mainVisual, ...secondaryVisuals] = galleryImages;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <SectionReveal>
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Texto a la izquierda (md+) o arriba (móvil) */}
          <div className="flex md:col-span-1 lg:col-span-7">
            <div className="seg-brand-hover flex w-full flex-col justify-center rounded-3xl border border-slate-200 bg-white px-6 py-7 sm:px-8 sm:py-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">Stands y experiencias</p>
              <h1 className="mt-3 text-3xl font-extrabold text-brand-primary sm:text-4xl">Diseñamos espacios que venden</h1>
              <p className="mt-3 max-w-2xl text-sm text-brand-muted sm:text-base">
                Creamos stands funcionales, atractivos y enfocados en resultados para que tu marca destaque en ferias,
                congresos y ruedas de negocio.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contacto?motivo=stand" className="seg-brand-hover btn-primary px-5 py-2.5">
                  Solicitar cotización
                </Link>
                <Link href="/contacto" className="seg-brand-hover btn-secondary px-5 py-2.5">
                  Agendar asesoría
                </Link>
              </div>
            </div>
          </div>

          {/* Imágenes a la derecha (md+) o debajo del texto (móvil) */}
          <aside className="flex min-h-[280px] flex-col gap-4 md:col-span-1 lg:col-span-5 lg:min-h-[320px]">
            <div className="seg-brand-hover relative min-h-[200px] flex-1 overflow-hidden rounded-2xl shadow-md lg:min-h-[200px]">
              <Image
                src={mainVisual.src}
                alt={mainVisual.alt}
                fill
                className="object-cover"
                sizes={mainVisual.sizes}
                priority
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#162134]/55 via-transparent to-[#17a3dd]/15"
                aria-hidden
              />
            </div>
            <div className="grid flex-shrink-0 grid-cols-2 gap-3 lg:gap-4">
              {secondaryVisuals.map((img) => (
                <div
                  key={img.src}
                  className="seg-brand-hover relative aspect-[4/3] overflow-hidden rounded-xl shadow-md"
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes={img.sizes} />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#048240]/20 to-[#162134]/35"
                    aria-hidden
                  />
                </div>
              ))}
            </div>
          </aside>
        </div>
      </SectionReveal>

      <SectionReveal className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" delay={0.04}>
        {standServices.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.title} className="seg-brand-hover card-elevated p-5">
              <Icon className="h-6 w-6 text-brand-primary" aria-hidden />
              <h2 className="mt-3 text-base font-bold text-brand-primary">{service.title}</h2>
              <p className="mt-2 text-sm text-brand-muted">{service.detail}</p>
            </article>
          );
        })}
      </SectionReveal>
    </div>
  );
}
