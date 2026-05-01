import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE_LOCK_COOKIE, SITE_LOCK_COOKIE_VALUE, SITE_LOCK_ENABLED } from "@/lib/site-lock";

const PUBLIC_PATHS = ["/en-proceso", "/api/unlock"];

export function proxy(request: NextRequest) {
  if (!SITE_LOCK_ENABLED) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (
    PUBLIC_PATHS.some((path) => pathname.startsWith(path)) ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/icon") ||
    pathname.startsWith("/manifest")
  ) {
    return NextResponse.next();
  }

  const unlockCookie = request.cookies.get(SITE_LOCK_COOKIE)?.value;
  if (unlockCookie === SITE_LOCK_COOKIE_VALUE) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = "/en-proceso";
  redirectUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!.*\\.).*)"]
};
