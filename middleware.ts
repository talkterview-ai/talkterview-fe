import { NextRequest, NextResponse } from "next/server";

import { PATH } from "@/base/constants/path";

// 로그인한 사용자가 접근할 수 없는 경로
const authRoutes: string[] = [PATH.login];

// 로그인하지 않은 사용자가 접근할 수 있는 경로
const publicRoutes: string[] = [PATH.login];

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("token")?.value;

  const isAuthRoute = authRoutes.includes(pathname);
  const isPublicRoute = publicRoutes.includes(pathname);

  if (accessToken) {
    if (isAuthRoute) {
      console.info(
        `[Middleware] Logged in user accessing ${pathname}. Redirecting to ${PATH.dashboard}`
      );
      return NextResponse.redirect(new URL(PATH.dashboard, request.url));
    }
  } else {
    if (!isPublicRoute) {
      console.info(
        `[Middleware] Logged out user accessing ${pathname}. Redirecting to ${PATH.login}`
      );
      return NextResponse.redirect(new URL(PATH.login, request.url));
    }
  }

  console.info(`[Middleware] Allowing access to ${pathname}`);
  return NextResponse.next();
};

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg)$).*)",
  ],
};
