import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;

  if (url.hostname === "localhost" && url.port !== "3000") {
    url.port = "3000";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
