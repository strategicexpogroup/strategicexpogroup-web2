import { Suspense } from "react";
import type { Metadata } from "next";
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
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-brand-text sm:text-4xl">Contacto</h1>
      <p className="mt-3 max-w-2xl text-brand-muted">
        Cuéntanos cómo quieres participar y te ayudaremos a encontrar la mejor opción para tu organización.
      </p>

      <SectionReveal className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
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
