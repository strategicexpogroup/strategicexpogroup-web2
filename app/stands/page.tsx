import Link from "next/link";
import type { Metadata } from "next";
import { Boxes, Compass, DraftingCompass, Paintbrush2, Ruler, Wrench } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

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

export default function StandsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <SectionReveal className="rounded-3xl border border-slate-200 bg-white px-6 py-7 sm:px-8 sm:py-9">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">Stands y experiencias</p>
        <h1 className="mt-3 text-3xl font-extrabold text-brand-primary sm:text-4xl">Diseñamos espacios que venden</h1>
        <p className="mt-3 max-w-3xl text-sm text-brand-muted sm:text-base">
          Creamos stands funcionales, atractivos y enfocados en resultados para que tu marca destaque en ferias,
          congresos y ruedas de negocio.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contacto?motivo=stand" className="btn-primary px-5 py-2.5">
            Solicitar cotización
          </Link>
          <Link href="/contacto" className="btn-secondary px-5 py-2.5">
            Agendar asesoría
          </Link>
        </div>
      </SectionReveal>

      <SectionReveal className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" delay={0.04}>
        {standServices.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.title} className="card-elevated p-5">
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
