import { NextRequest, NextResponse } from "next/server";
const AUTH_PAGES = ["/login"];
const isAuthPages = (url: any) =>
  AUTH_PAGES.some((page) => page.startsWith(url));

export async function middleware(request: NextRequest) {
  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("token") ?? { value: null };
  const isAuthPageRequested = isAuthPages(nextUrl.pathname);

  if (isAuthPageRequested) {
    if (!token) {
      const response = NextResponse.next();
      return response;
    }
    const response = NextResponse.redirect(new URL("/dashboard", url));
    return response;
  }
  if (!token) {
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", nextUrl.pathname);
    return NextResponse.redirect(new URL(`/?${searchParams}`, url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/", "/dashboard", "/employee/:path*"],
};
