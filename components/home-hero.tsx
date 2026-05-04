"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { assetPaths } from "@/lib/assets";

const slides = [
  { id: 0, src: assetPaths.images.hero, alt: "Feria y eventos corporativos Strategic Expo Group" }
];

export function HomeHero() {
  const [active, setActive] = useState(0);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-brand-primary sm:text-5xl lg:text-[2.75rem] xl:text-5xl">
            Conectamos industrias, creamos oportunidades.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-muted">
            Organizamos ferias, congresos y exposiciones que impulsan negocios, fortalecen comunidades y proyectan el
            desarrollo de la región.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/nuestras-ferias" className="btn-primary px-6 py-3">
              Conoce nuestras ferias
            </Link>
            <Link href="/contacto" className="btn-secondary bg-white px-6 py-3">
              Contáctanos
            </Link>
          </div>
          <div className="mt-10 flex justify-center gap-2 lg:justify-start" role="tablist" aria-label="Carrusel hero">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-label={`Diapositiva ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${active === i ? "bg-brand-primary" : "bg-slate-300 hover:bg-slate-400"}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div
            className="pointer-events-none absolute -right-4 -bottom-6 h-[88%] w-[72%] rounded-[3rem] bg-brand-accent/90 blur-0"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-3 top-8 h-[55%] w-[45%] rounded-[2.5rem] bg-brand-primary/15"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-slate-200/60">
            <div className="aspect-[4/3] w-full bg-slate-100">
              <Image
                src={slides[active].src}
                alt={slides[active].alt}
                width={960}
                height={640}
                className="h-full w-full object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
