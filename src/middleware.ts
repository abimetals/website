import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  getSessionCookieName,
  verifySessionToken,
} from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Login API must remain public; other admin APIs require a session
  if (pathname.startsWith("/api/admin")) {
    if (pathname === "/api/admin/login") {
      return NextResponse.next();
    }
    const token = request.cookies.get(getSessionCookieName())?.value;
    if (!(await verifySessionToken(token))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.next();
  }

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  if (pathname === "/admin/login") {
    const token = request.cookies.get(getSessionCookieName())?.value;
    if (await verifySessionToken(token)) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.next();
  }

  const token = request.cookies.get(getSessionCookieName())?.value;
  if (!(await verifySessionToken(token))) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/api/admin/:path*"],
};
