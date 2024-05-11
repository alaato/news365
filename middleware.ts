import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthor } from "./app/utils/authinticationUtils";
// This function can be marked `async` if using `await` inside
export async function  middleware(request: NextRequest) {
	const session = request.cookies.get("session")?.value;
	const isAuthenticated = session? true: false;
	const currentPath = request.nextUrl.pathname;
	

	if(isAuthenticated && (currentPath == '/login' || currentPath == '/signup'))
		return NextResponse.redirect(new URL("/", request.url));
	if (!isAuthenticated && currentPath.startsWith("/ladmin"))
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
