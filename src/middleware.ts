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
    "/privacy",
    "/error"
  ];

  // 정확한 경로 매칭 또는 동적 경로 확인
  const isValidPath = validPaths.includes(pathname) ||
    pathname.startsWith("/project/") ||
    pathname.startsWith("/notice/");

  // 유효하지 않은 경로면 /error로 리다이렉트
  if (!isValidPath) {
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
     * - public 폴더의 정적 파일들
     */
    '/((?!api|_next/static|_next/image|_next/fonts|favicon.ico|icon|image|svg|font).*)',
  ],
};
