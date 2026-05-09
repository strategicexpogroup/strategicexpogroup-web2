import Image from "next/image";
import { Suspense } from "react";
import type { Metadata } from "next";
import { Globe, Instagram, Mail, MapPinned, PhoneCall } from "lucide-react";
import { assetPaths } from "@/lib/assets";
import { ContactForm } from "@/components/contact-form";
import { SectionReveal } from "@/components/section-reveal";
import { contactData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para participar como expositor, patrocinador o aliado en nuestros eventos corporativos y ferias."
};

type Variant = 0 | 1 | 2 | 3;

const topChannels: {
  variant: Variant;
  icon: typeof PhoneCall;
  label: string;
  value: string;
}[] = [
  { variant: 0, icon: PhoneCall, label: "Línea directa", value: contactData.phone },
  { variant: 1, icon: Mail, label: "Correo", value: contactData.brandEmail },
  { variant: 2, icon: Instagram, label: "Instagram", value: contactData.instagram },
  { variant: 3, icon: Globe, label: "Sitio web", value: contactData.website }
];

const asideRows: { variant: Variant; label: string; value: string }[] = [
  { variant: 0, label: "Correo", value: contactData.brandEmail },
  { variant: 1, label: "Teléfono", value: contactData.phone },
  { variant: 2, label: "Instagram", value: contactData.instagram },
  { variant: 3, label: "Web", value: contactData.website },
  { variant: 0, label: "Ciudad", value: contactData.address }
];

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <h1 className="text-3xl font-extrabold text-brand-text sm:text-4xl">Contacto</h1>
      <p className="mt-3 max-w-2xl text-brand-muted">
        Cuéntanos cómo quieres participar y te ayudaremos a encontrar la mejor opción para tu organización.
      </p>

      <SectionReveal className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" delay={0.03}>
        {topChannels.map((ch) => {
          const Icon = ch.icon;
          return (
            <div
              key={ch.label}
              tabIndex={0}
              data-variant={ch.variant}
              className="contact-channel-card seg-brand-hover flex flex-col gap-1 p-4"
            >
              <Icon className="contact-channel-card-icon h-5 w-5" strokeWidth={1.85} aria-hidden />
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-muted">{ch.label}</p>
              <p className="text-sm font-semibold text-brand-primary">{ch.value}</p>
            </div>
          );
        })}
      </SectionReveal>

      <SectionReveal className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Suspense
          fallback={
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-brand-muted">
              Cargando formulario...
            </div>
          }
        >
          <ContactForm />
        </Suspense>

        <aside className="flex flex-col gap-8 rounded-2xl border border-slate-200 bg-white p-6">
          <div>
            <h2 className="text-lg font-bold text-brand-primary">Información directa</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {asideRows.map((row, idx) => (
                <li
                  key={`aside-${idx}-${row.label}`}
                  tabIndex={0}
                  data-variant={row.variant}
                  className="contact-channel-card seg-brand-hover flex flex-row flex-wrap items-baseline gap-x-2 gap-y-0.5 px-4 py-3 text-sm text-brand-text"
                >
                  <span className="font-semibold text-brand-primary">{row.label}:</span>
                  <span>{row.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="seg-brand-hover border-t border-slate-100 pt-6">
            <div className="flex items-center gap-2 text-brand-primary">
              <MapPinned className="h-5 w-5 shrink-0 text-[#048240]" aria-hidden />
              <h2 className="text-lg font-bold">Presencia Strategic Expo Group</h2>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-brand-muted">
              Cobertura y puntos de presencia del grupo en la región.
            </p>
            <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-inner">
              <Image
                src={assetPaths.images.contactPresenceMap}
                alt="Mapa de presencia y cobertura de Strategic Expo Group en Colombia y la región Caribe"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </aside>
      </SectionReveal>
    </div>
  );
}
