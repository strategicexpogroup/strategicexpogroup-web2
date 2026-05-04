"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assetPaths } from "@/lib/assets";
import type { Partner } from "@/lib/data";

type PartnerCarouselProps = {
  partners: Partner[];
};

export function PartnerCarousel({ partners }: PartnerCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (delta: number) => {
    scrollerRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div className="relative rounded-2xl border border-slate-200/80 bg-slate-100/80 py-8">
      <button
        type="button"
        aria-label="Anterior"
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 text-brand-primary shadow-sm transition hover:bg-brand-neutral md:left-4"
        onClick={() => scrollBy(-280)}
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        aria-label="Siguiente"
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 text-brand-primary shadow-sm transition hover:bg-brand-neutral md:right-4"
        onClick={() => scrollBy(280)}
      >
        <ChevronRight size={22} />
      </button>

      <div
        ref={scrollerRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto px-14 py-2 md:px-20"
      >
        {partners.map((p) => (
          <figure
            key={p.slug}
            className="flex min-w-[200px] max-w-[240px] shrink-0 snap-center flex-col items-center justify-center rounded-xl bg-white px-4 py-6 shadow-sm"
          >
            <div className="relative flex h-24 w-full flex-col items-center justify-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPaths.partners(p.slug)}
                alt={p.name}
                className="max-h-14 max-w-[200px] object-contain"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.classList.remove("hidden");
                }}
              />
              <figcaption className="hidden text-center text-[11px] font-semibold leading-snug text-brand-primary">
                {p.name}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
