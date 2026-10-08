import { NextResponse } from "next/server";

const COMPANY_HOSTS = new Set(["xyvot.com", "www.xyvot.com"]);
const SHOP_HOSTS = new Set(["shop.xyvot.com", "www.shop.xyvot.com", "dev.shop.xyvot.com"]);

export function middleware(req) {
  const host = req.headers.get("host")?.split(":")[0]?.toLowerCase() || "";
  const url = req.nextUrl.clone();
  const path = url.pathname;

  // Skip API routes, static files, Next.js internals, and already-rewritten paths
  if (
    path.startsWith("/api/") ||
    path.startsWith("/_next/") ||
    path.startsWith("/company/") ||
    path.startsWith("/shop/") ||
    path === "/company" ||
    path === "/shop" ||
    path.includes(".")
  ) {
    return NextResponse.next();
  }

  // Localhost / Vercel preview: ?site=company previews company, default shop
  if (host.includes("localhost") || host.endsWith(".vercel.app")) {
    if (url.searchParams.get("site") === "company") {
      url.pathname = path === "/" ? "/company" : `/company${path}`;
    } else {
      url.pathname = path === "/" ? "/shop" : `/shop${path}`;
    }
    return NextResponse.rewrite(url);
  }

  // Company domains → /company
  if (COMPANY_HOSTS.has(host)) {
    url.pathname = path === "/" ? "/company" : `/company${path}`;
    return NextResponse.rewrite(url);
  }

  // Shop domains (and any other xyvot.com subdomain) → /shop
  if (SHOP_HOSTS.has(host) || host.endsWith(".xyvot.com")) {
    url.pathname = path === "/" ? "/shop" : `/shop${path}`;
    return NextResponse.rewrite(url);
  }

  // Default: shop
  url.pathname = path === "/" ? "/shop" : `/shop${path}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
