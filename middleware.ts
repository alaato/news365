import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getDataFromSession } from "./app/utils/tokenUtils";
// This function can be marked `async` if using `await` inside
export async function  middleware(request: NextRequest) {
	const session = request.cookies.get("session")?.value;
	const isAuthenticated = session? true: false;
	const currentPath = request.nextUrl.pathname;

	
	if (!isAuthenticated)
		return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
	matcher: [
		"/login",
		"/signup",
		"/api/users",
		"/profile/:path*",
		"/createpost",
	],
};
