"use client";

import Image from "next/image";
import { Globe2 } from "lucide-react";
import { useState } from "react";

type InternationalGalleryTileProps = {
  src: string;
  label: string;
  alt: string;
};

export function InternationalGalleryTile({ src, label, alt }: InternationalGalleryTileProps) {
  const [broken, setBroken] = useState(false);

  return (
    <figure className="seg-brand-hover group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
      <div className="relative aspect-[16/10] w-full">
        {!broken ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="flex h-full min-h-[140px] w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#162134] to-[#17a3dd]/50 text-white">
            <Globe2 className="h-10 w-10 opacity-85" aria-hidden />
            <span className="text-xs font-medium text-white/85">Imagen pendiente</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#162134]/75 via-transparent to-transparent" aria-hidden />
        <figcaption className="absolute bottom-0 left-0 right-0 z-10 px-4 py-3 text-sm font-semibold text-white drop-shadow-sm">
          {label}
        </figcaption>
      </div>
    </figure>
  );
}
