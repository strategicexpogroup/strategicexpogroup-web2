/**
 * Web3Forms desde el **navegador** (IP del visitante).
 * La clave llega vía prop `web3AccessKey` (leída en el servidor desde WEB3FORMS_ACCESS_KEY o NEXT_PUBLIC_*).
 */

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

/** En cliente: usa la prop que envió el servidor; si no, solo NEXT_PUBLIC (útil en local). */
export function resolveWeb3AccessKey(override?: string | null): string | undefined {
  const o = override?.trim();
  if (o) return o;
  return process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() || undefined;
}

export async function postWeb3Forms(
  fields: Record<string, string | boolean | number>,
  keyOverride?: string | null
): Promise<{ ok: boolean; message?: string }> {
  const access_key = resolveWeb3AccessKey(keyOverride);
  if (!access_key) {
    return { ok: false, message: "NO_PUBLIC_KEY" };
  }

  const res = await fetch(WEB3FORMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key, ...fields })
  });

  let data: { success?: boolean; message?: string; body?: { message?: string } } = {};
  try {
    data = (await res.json()) as typeof data;
  } catch {
    /* vacío */
  }

  const ok = res.ok && data.success === true;
  const msg =
    (typeof data.message === "string" && data.message) ||
    (typeof data.body?.message === "string" && data.body.message) ||
    undefined;

  return { ok, message: ok ? undefined : msg || "No se pudo enviar el mensaje." };
}
