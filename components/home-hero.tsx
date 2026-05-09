"use client";

import Image from "next/image";
import { assetPaths } from "@/lib/assets";

const HERO_COPY = {
  title: "Conectamos industrias, creamos oportunidades.",
  subtitle:
    "Organizamos ferias, congresos y exposiciones que impulsan negocios, fortalecen comunidades y proyectan el desarrollo de la región."
};

/** Panel + viñeta: mismo bloque reutilizable en desktop y móvil */
function HeroContent({ compact }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "mx-auto w-full max-w-xl px-5 py-8 sm:max-w-2xl sm:px-8 sm:py-10"
          : "mx-auto w-full max-w-4xl px-6 py-10 sm:px-12 sm:py-12 xl:max-w-5xl xl:py-14"
      }
    >
      <div className="hero-reading-panel relative overflow-hidden rounded-2xl border border-white/20 px-6 py-8 sm:rounded-3xl sm:px-10 sm:py-10">
        {/* Brillo sutil esquina (marca) */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#17a3dd]/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-[#048240]/30 blur-3xl"
          aria-hidden
        />

        <h1
          className={`text-hero-readable relative text-center font-extrabold uppercase leading-snug tracking-[0.06em] text-white ${
            compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl xl:text-4xl 2xl:text-[2.65rem]"
          }`}
        >
          {HERO_COPY.title}
        </h1>

        <div
          className="relative mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#048240] via-[#17a3dd] to-[#e1e11e] sm:mt-6 sm:w-28"
          aria-hidden
        />

        <p
          className={`text-hero-readable relative mx-auto mt-5 max-w-3xl text-center font-semibold uppercase leading-relaxed tracking-[0.08em] text-white/95 sm:mt-6 ${
            compact ? "text-[0.65rem] sm:text-xs" : "text-xs sm:text-sm xl:text-base"
          }`}
        >
          {HERO_COPY.subtitle}
        </p>
      </div>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="w-full">
      {/* Escritorio */}
      <div className="relative hidden min-h-[min(70vh,720px)] w-full overflow-hidden lg:block">
        <Image
          src={assetPaths.images.hero}
          alt="Feria y eventos corporativos Strategic Expo Group"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Capa base: baja luminosidad global sin matar la foto */}
        <div className="pointer-events-none absolute inset-0 bg-[#162134]/45" aria-hidden />

        {/* Viñeta radial: oscurece justo donde va el texto */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_42%,rgba(22,33,52,0.88)_0%,rgba(22,33,52,0.45)_42%,rgba(22,33,52,0.12)_68%,transparent_100%)]"
          aria-hidden
        />

        {/* Degradado inferior más bajo y suave → menos “corte” sobre las personas */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#F8F9FA] via-[#F8F9FA]/50 to-transparent"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-[min(70vh,720px)] flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-20">
          <HeroContent />
        </div>
      </div>

      {/* Móvil / tablet */}
      <div className="relative min-h-[400px] w-full overflow-hidden sm:min-h-[440px] lg:hidden">
        <Image
          src={assetPaths.images.hero}
          alt="Feria y eventos corporativos Strategic Expo Group"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#162134]/42" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_75%_at_50%_40%,rgba(22,33,52,0.9)_0%,rgba(22,33,52,0.4)_50%,transparent_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[26%] bg-gradient-to-t from-[#F8F9FA] via-[#F8F9FA]/5 to-transparent"
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[400px] flex-col items-center justify-center px-3 py-12 sm:min-h-[440px] sm:py-14">
          <HeroContent compact />
        </div>
      </div>
    </section>
  );
}
