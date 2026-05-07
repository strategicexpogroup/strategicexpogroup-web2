import { Suspense } from "react";
import type { Metadata } from "next";
import { Globe, Instagram, Mail, PhoneCall } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionReveal } from "@/components/section-reveal";
import { contactData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para participar como expositor, patrocinador o aliado en nuestros eventos corporativos y ferias."
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <h1 className="text-3xl font-extrabold text-brand-text sm:text-4xl">Contacto</h1>
      <p className="mt-3 max-w-2xl text-brand-muted">
        Cuéntanos cómo quieres participar y te ayudaremos a encontrar la mejor opción para tu organización.
      </p>

      <SectionReveal className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" delay={0.03}>
        <div className="card-elevated p-4">
          <PhoneCall className="h-5 w-5 text-brand-primary" aria-hidden />
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-muted">Línea directa</p>
          <p className="text-sm font-semibold text-brand-primary">{contactData.phone}</p>
        </div>
        <div className="card-elevated p-4">
          <Mail className="h-5 w-5 text-brand-primary" aria-hidden />
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-muted">Correo</p>
          <p className="text-sm font-semibold text-brand-primary">{contactData.email}</p>
        </div>
        <div className="card-elevated p-4">
          <Instagram className="h-5 w-5 text-brand-primary" aria-hidden />
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-muted">Instagram</p>
          <p className="text-sm font-semibold text-brand-primary">{contactData.instagram}</p>
        </div>
        <div className="card-elevated p-4">
          <Globe className="h-5 w-5 text-brand-primary" aria-hidden />
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-muted">Sitio web</p>
          <p className="text-sm font-semibold text-brand-primary">{contactData.website}</p>
        </div>
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

        <aside className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-brand-primary">Información directa</h2>
          <ul className="mt-4 space-y-3 text-sm text-brand-text">
            <li>
              <span className="font-semibold">Correo:</span> {contactData.email}
            </li>
            <li>
              <span className="font-semibold">Teléfono:</span> {contactData.phone}
            </li>
            <li>
              <span className="font-semibold">Instagram:</span> {contactData.instagram}
            </li>
            <li>
              <span className="font-semibold">Web:</span> {contactData.website}
            </li>
          </ul>
        </aside>
      </SectionReveal>
    </div>
  );
}
