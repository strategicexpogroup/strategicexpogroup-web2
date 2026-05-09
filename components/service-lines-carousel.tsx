"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Handshake,
  Megaphone,
  Presentation,
  type LucideIcon
} from "lucide-react";

const icons: LucideIcon[] = [
  Building2,
  BriefcaseBusiness,
  Presentation,
  Megaphone,
  Handshake,
  CalendarDays
];

const AUTO_MS = 5_200;

export type ServiceLineSlide = {
  title: string;
  description: string;
  bgSrc: string;
};

type ServiceLinesCarouselProps = {
  slides: ServiceLineSlide[];
};

export function ServiceLinesCarousel({ slides }: ServiceLinesCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion || slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [paused, reduceMotion, slides.length]);

  if (slides.length === 0) return null;

  const slide = slides[index];
  const Icon = icons[index % icons.length];

  return (
    <div
      className="mx-auto max-w-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <p className="sr-only" aria-live="polite">
        Línea {index + 1} de {slides.length}: {slide.title}
      </p>

      <article className="seg-brand-hover relative flex min-h-[280px] flex-col overflow-hidden rounded-xl border border-slate-200/70 shadow-sm">
        <Image
          src={slide.bgSrc}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 512px"
          priority={index === 0}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#162134]/95 via-[#162134]/55 to-[#17a3dd]/30"
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[280px] flex-col justify-end p-6 text-center">
          <Icon className="mx-auto text-white drop-shadow-md" size={28} strokeWidth={1.75} aria-hidden />
          <h3 className="mt-3 text-sm font-bold uppercase tracking-wide text-white drop-shadow-sm">{slide.title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-white/90">{slide.description}</p>
        </div>
      </article>

      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-8 bg-brand-primary" : "w-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Ver línea ${i + 1}: ${slides[i].title}`}
            aria-current={i === index ? "true" : undefined}
          />
        ))}
      </div>

      <p className="mt-2 text-center text-[11px] text-brand-muted">
        {reduceMotion ? "Pasa con los puntos para ver cada línea." : "Carrusel automático. Pausa al pasar el cursor o al enfocar."}
      </p>
    </div>
  );
}
