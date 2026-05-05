/**
 * Rutas públicas bajo /public/assets/
 * Sustituye los archivos reales siguiendo public/assets/GUIA-ACTIVOS.md
 */
export const assetPaths = {
  logos: {
    main: "/assets/logos/logo-main.svg",
    white: "/assets/logos/logo-white.svg",
    feriaEducacionCaribe: "/assets/logos/feria-educacion-caribe.svg"
  },
  images: {
    /** Placeholder SVG incluido; sustituir por .webp según guía */
    // Usamos WebP porque existe en `public/assets/images/hero-banner-01.webp`
    // (evita 404 si el SVG fue removido).
    hero: "/assets/images/hero-banner-01.webp",
    eventEducationCaribe: "/assets/images/event-education-caribe.svg"
  },
  /** Logos de aliados: preferir WebP; si no existe, el carrusel muestra el nombre */
  partners: (slug: string) => `/assets/logos/partners/partner-${slug}.webp`
} as const;
