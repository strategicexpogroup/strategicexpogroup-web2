import { assetPaths } from "@/lib/assets";

/** Imágenes por índice de `serviceLines` (reutilizamos activos existentes). */
export const serviceLineBackgroundImages: readonly string[] = [
  assetPaths.images.hero,
  assetPaths.images.feriaEducacionCover,
  assetPaths.images.eventEducationCaribe,
  assetPaths.images.hero,
  assetPaths.images.eventEducationCaribe,
  assetPaths.images.feriaEducacionCover
] as const;
