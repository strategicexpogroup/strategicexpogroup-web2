/**
 * Envío de avisos del sitio (contacto / newsletter) hacia la bandeja del equipo.
 *
 * Configuración (elige una):
 * 1) Web3Forms — https://web3forms.com — crea el formulario con destino Strategicexpogroup@gmail.com y define WEB3FORMS_ACCESS_KEY.
 * 2) Resend — https://resend.com — define RESEND_API_KEY + RESEND_FROM_EMAIL (dominio verificado) y opcionalmente CONTACT_TO_EMAIL.
 */

const DEFAULT_TO = "Strategicexpogroup@gmail.com";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const RESEND_URL = "https://api.resend.com/emails";

export type MailSendResult =
  | { ok: true }
  | { ok: false; status: number; code: "NOT_CONFIGURED" | "UPSTREAM" | "VALIDATION"; message: string };

function destinationInbox(): string {
  return (process.env.CONTACT_TO_EMAIL || DEFAULT_TO).trim();
}

async function sendWithResend(params: {
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<MailSendResult> {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) {
    return { ok: false, status: 503, code: "NOT_CONFIGURED", message: "Resend no está configurado." };
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

async function sendWithWeb3Forms(body: Record<string, string>): Promise<MailSendResult> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) {
    return {
      ok: false,
      status: 503,
      code: "NOT_CONFIGURED",
      message: "Define WEB3FORMS_ACCESS_KEY en el servidor (Vercel → Environment Variables)."
    };
  }

  const res = await fetch(WEB3FORMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: accessKey, ...body })
  });

  let data: { success?: boolean; message?: string } = {};
  try {
    data = (await res.json()) as typeof data;
  } catch {
    /* vacío */
  }

  if (!res.ok || data.success !== true) {
    return {
      ok: false,
      status: 502,
      code: "UPSTREAM",
      message: data.message || "No se pudo entregar el mensaje."
    };
  }

  return { ok: true };
}

/** Prioridad: Resend si hay API key; si no, Web3Forms. */
export async function sendSiteNotification(params: {
  subject: string;
  html: string;
  /** Para Resend: cabecera Reply-To con el correo del visitante */
  replyTo?: string;
  /** Para Web3Forms (si no hay Resend): campos estándar del formulario */
  web3formsFallback: { name: string; email: string; message: string };
}): Promise<MailSendResult> {
  if (process.env.RESEND_API_KEY?.trim()) {
    return sendWithResend({
      subject: params.subject,
      html: params.html,
      replyTo: params.replyTo
    });
  }

  return sendWithWeb3Forms({
    name: params.web3formsFallback.name,
    email: params.web3formsFallback.email,
    subject: params.subject,
    message: params.web3formsFallback.message
  });
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
