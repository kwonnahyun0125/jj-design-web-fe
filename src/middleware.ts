import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 루트 경로를 /home으로 리다이렉트
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/home";
    return NextResponse.redirect(url);
  }

  const validPaths = [
    "/home",
    "/company",
    "/consultation",
    "/furniture",
    "/notice",
    "/project",
    "/showroom",
    "/error",
    "/project/*",
  ];

  // 유효하지 않은 경로면 /error로 리다이렉트
  if (!validPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/error", request.url));
  }

  // 유효하면 계속 진행
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - image (your image folder)
     * - svg (your svg folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|icon|image|svg|project).*)',
  ],
};
