"use client";

import type { CSSProperties } from "react";
import { assetPaths } from "@/lib/assets";
import type { Partner } from "@/lib/data";

type PartnerCarouselProps = {
  partners: Partner[];
  /**
   * Segundos que tarda la banda en recorrer un juego completo de logos (mitad del track duplicado).
   * Valores más bajos = desplazamiento más rápido.
   */
  cycleSeconds?: number;
};

function PartnerLogoCard({ partner }: { partner: Partner }) {
  return (
    <figure
      className="flex min-w-[200px] max-w-[240px] shrink-0 flex-col items-center justify-center rounded-xl bg-white px-4 py-6 shadow-sm"
    >
      <div className="relative flex h-24 w-full flex-col items-center justify-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPaths.partners(partner.slug)}
          alt={partner.name}
          className="max-h-14 max-w-[200px] object-contain"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.classList.remove("hidden");
          }}
        />
        <figcaption className="hidden text-center text-[11px] font-semibold leading-snug text-brand-primary">
          {partner.name}
        </figcaption>
      </div>
    </figure>
  );
}

export function PartnerCarousel({ partners, cycleSeconds = 42 }: PartnerCarouselProps) {
  if (partners.length === 0) {
    return null;
  }

  /** Dos copias idénticas para bucle sin salto al reiniciar la animación */
  const trackPartners: Partner[] = [...partners, ...partners];

  return (
    <div
      className="relative rounded-2xl border border-slate-200/80 bg-slate-100/80 py-8"
      style={{ "--partner-marquee-duration": `${cycleSeconds}s` } as CSSProperties}
    >
      <p className="sr-only">Logos de aliados estratégicos en desplazamiento continuo. Pausa al pasar el cursor.</p>
      <div className="partner-marquee-viewport overflow-hidden px-4 md:px-8">
        <div className="partner-marquee-track gap-6 md:gap-8">
          {trackPartners.map((p, index) => (
            <PartnerLogoCard key={`${p.slug}-${index}`} partner={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
