/**
 * Envío **solo desde el servidor** vía Resend (clave secreta).
 *
 * Web3Forms va por el navegador: `lib/web3forms-client.ts` + `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
 * @see https://docs.web3forms.com/getting-started/api-reference
 */

/** Destino Resend si no hay CONTACT_TO_EMAIL; alinear con Web3Forms / contacto visible. */
const DEFAULT_TO = "josejaviercol7@gmail.com";
const RESEND_URL = "https://api.resend.com/emails";

export type MailSendResult =
  | { ok: true }
  | { ok: false; status: number; code: "NOT_CONFIGURED" | "UPSTREAM" | "VALIDATION"; message: string };

function destinationInbox(): string {
  return (process.env.CONTACT_TO_EMAIL || DEFAULT_TO).trim();
}

export async function sendWithResend(params: {
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<MailSendResult> {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) {
    return {
      ok: false,
      status: 503,
      code: "NOT_CONFIGURED",
      message: "Resend no está configurado (RESEND_API_KEY)."
    };
  }

  const from = process.env.RESEND_FROM_EMAIL?.trim();
  if (!from) {
    return {
      ok: false,
      status: 503,
      code: "NOT_CONFIGURED",
      message: "Define RESEND_FROM_EMAIL (remitente verificado en Resend)."
    };
  }

  const res = await fetch(RESEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [destinationInbox()],
      subject: params.subject,
      html: params.html,
      ...(params.replyTo ? { reply_to: params.replyTo } : {})
    })
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return {
      ok: false,
      status: 502,
      code: "UPSTREAM",
      message: text || "Resend rechazó el envío."
    };
  }

  return { ok: true };
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
