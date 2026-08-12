import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Allow public access to admin login page & admin auth login API
  if (
    pathname === "/admin/login" ||
    pathname === "/api/admin/auth/login"
  ) {
    const adminSession = req.cookies.get("ttp_admin_session")?.value;
    if (adminSession && pathname === "/admin/login") {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }
    return NextResponse.next();
  }

  // 2. Protect all /admin and /admin/* pages server-side
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    const adminSession = req.cookies.get("ttp_admin_session")?.value;
    if (!adminSession) {
      const loginUrl = new URL("/admin/login", req.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 3. Protect all /api/admin/* endpoints (except /api/admin/auth/login)
  if (pathname.startsWith("/api/admin")) {
    const adminSession = req.cookies.get("ttp_admin_session")?.value;
    if (!adminSession) {
      return NextResponse.json({ error: "Unauthorized. Protected Admin endpoint." }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/api/admin/:path*"],
};
