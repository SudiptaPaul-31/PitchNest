import { auth } from "auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  // Protect dashboard route
  if (nextUrl.pathname.startsWith("/dashboard") && !isLoggedIn) {
    return NextResponse.redirect(new URL("/signup", nextUrl));
  }

  // Redirect logged in users away from auth pages
  if (
    (nextUrl.pathname === "/signup" || nextUrl.pathname === "/signin") &&
    isLoggedIn
  ) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
