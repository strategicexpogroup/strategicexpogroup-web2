/**
 * Solo importar desde **Server Components** (p. ej. `app/layout.tsx`).
 * `WEB3FORMS_ACCESS_KEY` no existe en el bundle del cliente; hay que pasarla como prop.
 */
export function readWeb3AccessKeyForClient(): string | undefined {
  const a = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  const b = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  return a || b || undefined;
}
