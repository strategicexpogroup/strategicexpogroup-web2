"use client";

import type { CSSProperties } from "react";
import { assetPaths } from "@/lib/assets";
import type { Partner } from "@/lib/data";

type PartnerCarouselProps = {
  partners: Partner[];
  /**
   * Segundos aproximados en recorrer un bloque completo de logos (un “ciclo” visual).
   * Valores más bajos = más rápido.
   */
  cycleSeconds?: number;
};

/** Cuántas veces se concatena la lista completa en fila (misma cadena); permite bucle suave en pantallas muy anchas. */
const MARQUEE_CHAIN_COPIES = 4;

function PartnerLogoStripItem({ partner, instanceIndex }: { partner: Partner; instanceIndex: number }) {
  return (
    <figure className="mx-2 flex h-16 min-w-[148px] shrink-0 items-center justify-center rounded-lg border border-slate-200/70 bg-white px-4 py-2 shadow-sm md:mx-2.5 md:h-[4.5rem] md:min-w-[168px] md:px-6">
      <div className="relative flex max-w-[200px] items-center justify-center md:max-w-[240px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPaths.partners(partner.slug)}
          alt={partner.name}
          className="max-h-11 w-auto max-w-[180px] object-contain md:max-h-12 md:max-w-[220px]"
          loading={instanceIndex < 8 ? "eager" : "lazy"}
          decoding="async"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.classList.remove("hidden");
          }}
        />
        <figcaption className="hidden max-w-[200px] text-center text-[10px] font-semibold uppercase leading-tight text-brand-primary md:text-[11px]">
          {partner.name}
        </figcaption>
      </div>
    </figure>
  );
}

/** ~36 s por “bloque” de logos: ritmo visible y constante sin intervención del usuario */
export function PartnerCarousel({ partners, cycleSeconds = 36 }: PartnerCarouselProps) {
  if (partners.length === 0) {
    return null;
  }

  /** Misma cadena de logos repetida en fila (marquee infinito; el CSS desplaza exactamente 1/N del ancho total). */
  const trackPartners: Partner[] = Array.from({ length: MARQUEE_CHAIN_COPIES }, () => partners).flat();

  const shiftPercent = -(100 / MARQUEE_CHAIN_COPIES);

  const cssVars = {
    "--partner-marquee-duration": `${cycleSeconds}s`,
    "--partner-marquee-shift": `${shiftPercent}%`
  } as CSSProperties;

  return (
    <div
      className="relative rounded-2xl border border-slate-200/80 bg-slate-100/80 py-4 md:py-5"
      style={cssVars}
    >
      <p className="sr-only">
        Logos de aliados estratégicos en una fila continua con desplazamiento automático. Pausa al pasar el cursor.
      </p>
      <div className="partner-marquee-viewport scrollbar-hide">
        <div className="partner-marquee-track">
          {trackPartners.map((p, index) => (
            <PartnerLogoStripItem key={`${p.slug}-${index}`} partner={p} instanceIndex={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
