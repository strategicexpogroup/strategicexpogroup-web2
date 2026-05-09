import { NextResponse } from "next/server";
import { escapeHtml, sendSiteNotification } from "@/lib/outbound-mail";

function clamp(s: string, max: number): string {
  const t = s.trim();
  return t.length <= max ? t : t.slice(0, max);
}

function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const email = typeof b.email === "string" ? clamp(b.email, 254) : "";

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Indica un correo electrónico válido." }, { status: 400 });
  }

  const honeypot = typeof b.company === "string" ? b.company : "";
  if (honeypot.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const subject = "[Strategic Expo — Newsletter] Nueva suscripción desde el footer";
  const html = `
    <p>Alguien se suscribió al newsletter desde el pie del sitio.</p>
    <p><strong>Correo del suscriptor:</strong> ${escapeHtml(email)}</p>
  `.trim();

  const plain = `Nueva suscripción al newsletter.\nCorreo: ${email}`;

  const result = await sendSiteNotification({
    subject,
    html,
    replyTo: email,
    web3formsFallback: {
      name: "Newsletter (footer)",
      email,
      message: plain
    }
  });

  if (!result.ok) {
    const status = result.code === "NOT_CONFIGURED" ? 503 : result.status;
    return NextResponse.json(
      { error: result.message, code: result.code },
      { status }
    );
  }

  return NextResponse.json({ ok: true });
}
