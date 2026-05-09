import Image from "next/image";
import type { CSSProperties } from "react";
import { noticiasBannerImages } from "@/lib/noticias-banner";

/** Copias del bloque completo de slides en fila (bucle infinito sin salto). */
const CHAIN_COPIES = 4;

/** Segundos aproximados en recorrer un bloque completo de imágenes. */
const CYCLE_SECONDS = 42;

export function NoticiasBannerMarquee() {
  if (noticiasBannerImages.length === 0) {
    return null;
  }

  const trackSlides = Array.from({ length: CHAIN_COPIES }, () => [...noticiasBannerImages]).flat();
  const shiftPercent = -(100 / CHAIN_COPIES);

  const cssVars = {
    "--news-banner-marquee-duration": `${CYCLE_SECONDS}s`,
    "--news-banner-marquee-shift": `${shiftPercent}%`
  } as CSSProperties;

  return (
    <div
      className="relative rounded-2xl border border-slate-200/80 bg-slate-100/70 py-3 shadow-sm md:py-4"
      style={cssVars}
    >
      <p className="sr-only">
        Carrusel automático de imágenes de ferias y eventos. Pausa al pasar el cursor.
      </p>
      <div className="news-banner-marquee-viewport scrollbar-hide">
        <div className="news-banner-marquee-track">
          {trackSlides.map((img, index) => (
            <div
              key={`${img.src}-${index}`}
              className="relative h-36 w-[min(85vw,320px)] shrink-0 overflow-hidden rounded-xl border border-slate-200/50 shadow-md sm:h-40 sm:w-[min(82vw,380px)] md:h-44 md:w-[420px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 380px, 420px"
                priority={index < 4}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#162134]/35 via-transparent to-[#17a3dd]/10"
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
