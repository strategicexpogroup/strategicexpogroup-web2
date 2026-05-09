"use client";

import Image from "next/image";
import { assetPaths } from "@/lib/assets";

const HERO_COPY = {
  title: "Conectamos industrias, creamos oportunidades.",
  subtitle:
    "Organizamos ferias, congresos y exposiciones que impulsan negocios, fortalecen comunidades y proyectan el desarrollo de la región."
};

export function HomeHero() {
  return (
    <section className="w-full">
      {/* Escritorio: imagen a ancho completo hasta el borde inferior del hero; degradados hacia el fondo de la página y para legibilidad del texto */}
      <div className="relative hidden min-h-[min(70vh,720px)] w-full overflow-hidden lg:block">
        <Image
          src={assetPaths.images.hero}
          alt="Feria y eventos corporativos Strategic Expo Group"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Oscurece la imagen para que el texto resalte */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#162134]/88 via-[#162134]/55 to-[#162134]/35"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#F8F9FA] via-[#F8F9FA]/95 to-transparent"
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[min(70vh,720px)] flex-col items-center justify-center px-6 py-20 text-center">
          <h1 className="max-w-5xl text-3xl font-extrabold uppercase leading-tight tracking-[0.08em] text-white drop-shadow-md xl:text-4xl 2xl:text-5xl">
            {HERO_COPY.title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-sm font-semibold uppercase leading-relaxed tracking-[0.12em] text-white/90 drop-shadow sm:text-base">
            {HERO_COPY.subtitle}
          </p>
        </div>
      </div>

      {/* Móvil / tablet: mismo mensaje centrado y en mayúsculas, sin botones; imagen de fondo más compacta */}
      <div className="relative min-h-[380px] w-full overflow-hidden sm:min-h-[420px] lg:hidden">
        <Image
          src={assetPaths.images.hero}
          alt="Feria y eventos corporativos Strategic Expo Group"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#162134]/85 via-[#162134]/50 to-[#162134]/40" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#F8F9FA] to-transparent" aria-hidden />
        <div className="relative z-10 flex min-h-[380px] flex-col items-center justify-center px-5 py-14 text-center sm:min-h-[420px]">
          <h1 className="text-2xl font-extrabold uppercase leading-tight tracking-[0.06em] text-white drop-shadow-sm sm:text-3xl">
            {HERO_COPY.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xs font-semibold uppercase leading-relaxed tracking-[0.1em] text-white/90 sm:text-sm">
            {HERO_COPY.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
