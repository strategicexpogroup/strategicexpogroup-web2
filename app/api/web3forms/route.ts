import { NextResponse } from "next/server";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const MOTIVES = new Set(["stand", "patrocinio", "informacion-general", "otro"]);

function getAccessKey(): string {
  return (
    process.env.WEB3FORMS_ACCESS_KEY?.trim() ||
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ||
    ""
  );
}

function clamp(s: string, max: number): string {
  const t = s.trim();
  return t.length <= max ? t : t.slice(0, max);
}

function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

async function submitToWeb3Forms(fields: Record<string, string>): Promise<{ ok: boolean; message?: string }> {
  const access_key = getAccessKey();
  if (!access_key) {
    return { ok: false, message: "NOT_CONFIGURED" };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 25_000);

  try {
    const res = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "StrategicExpoGroup-Web/1.0"
      },
      body: JSON.stringify({ access_key, ...fields }),
      signal: controller.signal
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

    return { ok, message: ok ? undefined : msg || `Web3Forms HTTP ${res.status}` };
  } catch (e) {
    const name = e instanceof Error ? e.name : "";
    if (name === "AbortError") {
      return { ok: false, message: "Tiempo de espera al contactar Web3Forms." };
    }
    return { ok: false, message: "No se pudo conectar con Web3Forms desde el servidor." };
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function POST(request: Request) {
  const accessKey = getAccessKey();
  if (!accessKey) {
    return NextResponse.json(
      {
        ok: false,
        code: "NOT_CONFIGURED",
        error: "Define WEB3FORMS_ACCESS_KEY en Vercel y vuelve a desplegar."
      },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const honeypot = typeof b._seg_hp === "string" ? b._seg_hp : "";
  if (honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const kind = typeof b.kind === "string" ? b.kind : "";

  if (kind === "contact") {
    const nombre = typeof b.nombre === "string" ? clamp(b.nombre, 120) : "";
    const correo = typeof b.correo === "string" ? clamp(b.correo, 254) : "";
    const telefono = typeof b.telefono === "string" ? clamp(b.telefono, 40) : "";
    const mensaje = typeof b.mensaje === "string" ? clamp(b.mensaje, 4000) : "";
    const motivo = typeof b.motivo === "string" ? b.motivo : "";

    if (!nombre || !correo || !telefono || !mensaje || !MOTIVES.has(motivo)) {
      return NextResponse.json({ error: "Faltan campos o motivo no válido." }, { status: 400 });
    }
    if (!isValidEmail(correo)) {
      return NextResponse.json({ error: "Correo no válido." }, { status: 400 });
    }

    const message = [
      `Teléfono: ${telefono}`,
      `Motivo: ${motivo}`,
      "",
      mensaje
    ].join("\n");

    const result = await submitToWeb3Forms({
      subject: `[Strategic Expo — Contacto web] ${motivo}`,
      name: nombre,
      email: correo,
      message
    });

    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: result.message || "Web3Forms rechazó el envío." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  }

  if (kind === "newsletter") {
    const email = typeof b.email === "string" ? clamp(b.email, 254) : "";
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Correo no válido." }, { status: 400 });
    }

    const result = await submitToWeb3Forms({
      subject: "[Strategic Expo — Newsletter] Nueva suscripción desde el footer",
      name: "Newsletter (footer del sitio)",
      email,
      message: `Solicitud de suscripción al newsletter.\nCorreo del suscriptor: ${email}`
    });

    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: result.message || "Web3Forms rechazó el envío." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Tipo de formulario no válido." }, { status: 400 });
}
