"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CalendarDays,
  GraduationCap,
  Handshake,
  MapPin,
  Mic2,
  Store,
  Users,
  type LucideIcon
} from "lucide-react";
import { assetPaths } from "@/lib/assets";
import type { Fair } from "@/lib/data";

const fairSidebarIcons: LucideIcon[] = [Store, Mic2, GraduationCap, Users, Handshake];

const AUTO_MS = 6_500;

type HomeFeaturedFairMobileProps = {
  fair: Fair;
  offerings: string[];
};

export function HomeFeaturedFairMobile({ fair, offerings }: HomeFeaturedFairMobileProps) {
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
    if (paused || reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % 3), AUTO_MS);
    return () => clearInterval(id);
  }, [paused, reduceMotion]);

  const dots = ["Resumen", "Imagen", "En el evento"] as const;

  return (
    <div
      className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-soft"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <p className="sr-only" aria-live="polite">
        Feria destacada, vista {dots[index]} ({index + 1} de 3)
      </p>

      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {/* Slide 1: texto + CTAs */}
        <div className="w-full shrink-0 px-5 py-6 sm:px-7">
          <Image
            src={assetPaths.logos.feriaEducacionCaribe}
            alt={fair.name}
            width={200}
            height={120}
            className="mx-auto h-auto w-36 object-contain sm:w-44"
          />
          <h3 className="mt-4 text-center text-lg font-extrabold leading-snug text-brand-primary sm:text-xl">
            {fair.name}
          </h3>
          <p className="mt-1 text-center text-xs font-medium text-brand-accent sm:text-sm">{fair.tagline}</p>
          <p className="mt-3 line-clamp-5 text-center text-xs leading-relaxed text-brand-muted sm:text-sm">
            {fair.shortDescription}
          </p>
          <ul className="mt-4 space-y-2 text-xs text-brand-text sm:text-sm">
            <li className="flex items-start gap-2">
              <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" aria-hidden />
              <span>{fair.dateLabel}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" aria-hidden />
              <span>{fair.location}</span>
            </li>
            <li className="flex items-start gap-2">
              <Users className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" aria-hidden />
              <span>Gran afluencia estudiantil y familiar esperada</span>
            </li>
          </ul>
          <div className="mt-5 flex flex-col gap-2.5">
            <Link href="/contacto?motivo=stand" className="seg-brand-hover btn-primary w-full py-2.5 text-center text-sm">
              Solicitar stand
            </Link>
            <Link
              href={`/nuestras-ferias/${fair.slug}`}
              className="seg-brand-hover btn-accent w-full py-2.5 text-center text-sm"
            >
              Ver feria
            </Link>
            <Link
              href="/contacto?motivo=patrocinio"
              className="seg-brand-hover btn-secondary w-full bg-transparent py-2.5 text-center text-sm"
            >
              Ser patrocinador
            </Link>
          </div>
        </div>

        {/* Slide 2: imagen */}
        <div className="w-full shrink-0 bg-brand-neutral px-3 py-5 sm:px-5">
          <div className="relative mx-auto aspect-[3/4] max-h-[min(72vh,420px)] w-full max-w-sm overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={assetPaths.images.eventEducationCaribe}
              alt={fair.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 92vw, 400px"
            />
          </div>
        </div>

        {/* Slide 3: sidebar feria */}
        <div className="w-full shrink-0 bg-brand-primary px-5 py-7 text-white sm:px-7 sm:py-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-accent">En el evento</p>
          <ul className="mt-5 space-y-3.5 text-sm leading-snug text-slate-100">
            {offerings.map((line, i) => {
              const Icon = fairSidebarIcons[i] ?? Handshake;
              return (
                <li key={line} className="flex gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                  <span>{line}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 border-t border-slate-100 bg-white px-3 py-3">
        {dots.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all ${
              i === index ? "h-2.5 w-8 bg-brand-primary" : "h-2.5 w-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Mostrar: ${label}`}
            aria-current={i === index ? "true" : undefined}
          />
        ))}
      </div>
      <p className="border-t border-slate-50 bg-slate-50 px-3 py-2 text-center text-[10px] text-brand-muted">
        {reduceMotion ? "Usa los puntos para ver cada parte." : "Carrusel automático · desliza mentalmente o usa los puntos"}
      </p>
    </div>
  );
}
