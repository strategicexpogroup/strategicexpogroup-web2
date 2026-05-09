"use client";

import Image from "next/image";
import { User } from "lucide-react";
import { useState } from "react";

type ExpositorCardProps = {
  name: string;
  title: string;
  bio: string;
  photoSrc: string;
};

export function ExpositorCard({ name, title, bio, photoSrc }: ExpositorCardProps) {
  const [broken, setBroken] = useState(false);

  return (
    <article className="seg-brand-hover flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-[#162134] via-[#17a3dd]/30 to-[#048240]/40 sm:aspect-[3/4]">
        {!broken ? (
          <Image
            src={photoSrc}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-white/90">
            <User className="h-16 w-16 opacity-80" strokeWidth={1.25} aria-hidden />
            <span className="px-4 text-center text-xs font-medium uppercase tracking-wide text-white/80">
              Foto pendiente
            </span>
          </div>
        )}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#162134]/90 to-transparent"
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-brand-primary">{name}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#048240]">{title}</p>
        <p className="mt-3 text-sm leading-relaxed text-brand-muted">{bio}</p>
      </div>
    </article>
  );
}
