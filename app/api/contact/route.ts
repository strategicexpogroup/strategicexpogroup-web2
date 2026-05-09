import { NextResponse } from "next/server";
import { escapeHtml, sendWithResend } from "@/lib/outbound-mail";

const MOTIVES = new Set(["stand", "patrocinio", "informacion-general", "otro"]);

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
  const nombre = typeof b.nombre === "string" ? clamp(b.nombre, 120) : "";
  const correo = typeof b.correo === "string" ? clamp(b.correo, 254) : "";
  const telefono = typeof b.telefono === "string" ? clamp(b.telefono, 40) : "";
  const mensaje = typeof b.mensaje === "string" ? clamp(b.mensaje, 4000) : "";
  const motivo = typeof b.motivo === "string" ? b.motivo : "";

  if (!nombre || !correo || !telefono || !mensaje || !MOTIVES.has(motivo)) {
    return NextResponse.json({ error: "Faltan campos obligatorios o el motivo no es válido." }, { status: 400 });
  }

  if (!isValidEmail(correo)) {
    return NextResponse.json({ error: "Correo electrónico no válido." }, { status: 400 });
  }

  const honeypot = typeof b._seg_hp === "string" ? b._seg_hp : "";
  if (honeypot.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const subject = `[Strategic Expo — Contacto web] ${motivo}`;
  const plain = [
    `Nombre: ${nombre}`,
    `Correo: ${correo}`,
    `Teléfono: ${telefono}`,
    `Motivo: ${motivo}`,
    "",
    mensaje
  ].join("\n");

  const html = `
    <h2>Nuevo mensaje desde el sitio web</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
    <p><strong>Correo:</strong> ${escapeHtml(correo)}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>
    <p><strong>Motivo:</strong> ${escapeHtml(motivo)}</p>
    <hr />
    <p style="white-space:pre-wrap">${escapeHtml(mensaje)}</p>
  `.trim();

  const result = await sendWithResend({
    subject,
    html,
    replyTo: correo
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
