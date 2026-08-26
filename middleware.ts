import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - assets / images / static file extensions
     */
    "/((?!api/|_next/static|_next/image|assets/|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)",
  ],
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get("host") || "";
  const { pathname } = url;

  // Determine if incoming request is on the theater subdomain
  const isTheaterSubdomain =
    hostname.startsWith("theater.") ||
    hostname === "theater.lacurations.co.in";

  if (isTheaterSubdomain) {
    // If the subdomain request explicitly contains /theater in the URL path,
    // redirect to clean path on the subdomain (e.g., theater.lacurations.co.in/theater -> theater.lacurations.co.in/)
    if (pathname === "/theater") {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
    if (pathname.startsWith("/theater/")) {
      url.pathname = pathname.replace(/^\/theater/, "") || "/";
      return NextResponse.redirect(url);
    }

    // Rewrite incoming paths to the internal /theater folder
    // e.g. https://theater.lacurations.co.in/ -> internally served from /theater
    // e.g. https://theater.lacurations.co.in/movie/123 -> internally served from /theater/movie/123
    // e.g. https://theater.lacurations.co.in/privacy-policy -> internally served from /theater/privacy-policy
    url.pathname = `/theater${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

  // If on main domain (e.g. lacurations.co.in) and user visits /theater or /theater/*,
  // permanently redirect (308) to the subdomain in production
  if (pathname === "/theater" || pathname.startsWith("/theater/")) {
    const isProduction = hostname.includes("lacurations.co.in");
    if (isProduction) {
      const subPath = pathname.replace(/^\/theater/, "") || "";
      const redirectUrl = new URL(
        `${subPath}${url.search}`,
        "https://theater.lacurations.co.in"
      );
      return NextResponse.redirect(redirectUrl, 308);
    }
  }

  return NextResponse.next();
}
