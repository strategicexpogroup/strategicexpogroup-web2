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
    eventEducationCaribe: "/assets/images/event-education-caribe.webp",
    feriaEducacionCover: "/assets/images/feria-educacion-caribe-cover.webp"
  },
  /**
   * Inicio — sección «Nuestras líneas» (`public/assets/images/service-lines/`).
   * Archivos: `line-01.webp` … (sin extensión en el argumento).
   */
  serviceLine: (basename: string) => `/assets/images/service-lines/${basename}.webp`,
  /**
   * Imágenes por feria: carpeta = slug (p. ej. `feria-educacion-caribe`).
   * @see public/assets/GUIA-ACTIVOS.md
   */
  fair: {
    expositorPhoto: (fairSlug: string, id: string) => `/assets/images/${fairSlug}/expositores/${id}.webp`,
    internacional: (fairSlug: string, filename: string) => `/assets/images/${fairSlug}/internacional/${filename}`
  },
  /** Logos de aliados: preferir WebP; si no existe, el carrusel muestra el nombre */
  partners: (slug: string) => `/assets/logos/partners/partner-${slug}.webp`
} as const;
