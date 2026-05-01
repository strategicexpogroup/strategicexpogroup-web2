import { NextResponse } from "next/server";
import {
  SITE_LOCK_COOKIE,
  SITE_LOCK_COOKIE_VALUE,
  SITE_LOCK_DEFAULT_PIN
} from "@/lib/site-lock";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { pin?: string } | null;
  const submittedPin = body?.pin ?? "";
  const expectedPin = process.env.SITE_LOCK_PIN ?? SITE_LOCK_DEFAULT_PIN;

  if (submittedPin !== expectedPin) {
    return NextResponse.json({ ok: false, message: "PIN inválido" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: SITE_LOCK_COOKIE,
    value: SITE_LOCK_COOKIE_VALUE,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8
  });
  return response;
}
