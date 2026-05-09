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

const SUBMIT_TIMEOUT_MS = 22_000;

export async function postWeb3Forms(
  fields: Record<string, string | boolean | number>,
  keyOverride?: string | null
): Promise<{ ok: boolean; message?: string }> {
  const access_key = resolveWeb3AccessKey(keyOverride);
  if (!access_key) {
    return { ok: false, message: "NO_PUBLIC_KEY" };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);

  try {
    const res = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key, ...fields }),
      signal: controller.signal
    });

    let data: { success?: boolean; message?: string; body?: { message?: string } } = {};
    try {
      data = (await res.json()) as typeof data;
    } catch {
      /* cuerpo no JSON */
    }

    const ok = res.ok && data.success === true;
    const msg =
      (typeof data.message === "string" && data.message) ||
      (typeof data.body?.message === "string" && data.body.message) ||
      undefined;

    return { ok, message: ok ? undefined : msg || "No se pudo enviar el mensaje." };
  } catch (err) {
    const name = err instanceof Error ? err.name : "";
    if (name === "AbortError") {
      return {
        ok: false,
        message:
          "Tiempo de espera agotado al contactar el servicio de envío. Revisa tu conexión, desactiva bloqueadores de anuncios para este sitio o escribe por correo."
      };
    }
    return {
      ok: false,
      message:
        "No se pudo conectar con el servicio de envío (red o bloqueador). Prueba otro navegador o escríbenos por correo."
    };
  } finally {
    clearTimeout(timeoutId);
  }
}
