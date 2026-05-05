/**
 * Rutas públicas bajo /public/assets/
 * Sustituye los archivos reales siguiendo public/assets/GUIA-ACTIVOS.md
 */
export const assetPaths = {
  logos: {
    main: "/assets/logos/logo-main.svg",
    white: "/assets/logos/logo-white.svg",
    feriaEducacionCaribe: "/assets/logos/feria-educacion-caribe.png"
  },
  images: {
    /** Imágenes de portada optimizadas en WebP */
    hero: "/assets/images/hero-banner-01.webp",
    eventEducationCaribe: "/assets/images/event-education-caribe.webp"
  },
  /** Logos de aliados: preferir WebP; si no existe, el carrusel muestra el nombre */
  partners: (slug: string) => `/assets/logos/partners/partner-${slug}.webp`
} as const;
