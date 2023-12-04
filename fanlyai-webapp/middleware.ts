import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { cookies } from "next/headers";
import { SessionOptions, getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "./libs/auth";

export async function middleware(request: NextRequest , response: NextResponse) {
  const session = await getIronSession<SessionData>(
   request, 
   response,
   sessionOptions
  );

  if (!session.isLoggedIn) {
   
    return NextResponse.redirect(new URL('/', request.url))
  }

  return;

}

export const config = {
  matcher: ["/chatbots","/chatbots/:path*","/editor","/resources","/featured-chatbots","/vuzzbot"]
};