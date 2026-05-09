import { assetPaths } from "@/lib/assets";

/**
 * Fondo por índice de `serviceLines` (orden en `lib/data.ts`).
 * Archivos en `public/assets/images/service-lines/`: `line-01.webp` … `line-06.webp`.
 */
export const serviceLineBackgroundImages: readonly string[] = [
  assetPaths.serviceLine("line-01"),
  assetPaths.serviceLine("line-02"),
  assetPaths.serviceLine("line-03"),
  assetPaths.serviceLine("line-04"),
  assetPaths.serviceLine("line-05"),
  assetPaths.serviceLine("line-06")
] as const;
