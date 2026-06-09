import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, locales } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    const locale = pathname.split("/")[1];
    const response = NextResponse.next();
    if (isLocale(locale)) {
      response.headers.set("x-locale", locale);
    }
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|images|videos|models|.*\\..*).*)",
    "/",
  ],
};
