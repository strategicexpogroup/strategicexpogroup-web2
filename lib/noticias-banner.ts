import { assetPaths } from "@/lib/assets";

/** Imágenes del banner horizontal automático en `/noticias` — añade entradas aquí cuando tengas más portadas de ferias. */
export const noticiasBannerImages = [
  {
    src: assetPaths.images.feriaEducacionCover,
    alt: "Feria Educación Caribe 2026 — portada del evento"
  },
  {
    src: assetPaths.images.hero,
    alt: "Strategic Expo Group — ferias y eventos"
  }
] as const;
