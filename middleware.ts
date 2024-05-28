import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthor } from "./app/utils/Auth/authinticationUtils";
// This function can be marked `async` if using `await` inside
export async function  middleware(request: NextRequest) {
	const session = request.cookies.get("session")?.value;
	const isAuthenticated = session? true: false;
	const currentPath = request.nextUrl.pathname;
	const isAnAuthor = isAuthor();
	if(!isAuthenticated && (currentPath === '/logout'))
		return NextResponse.redirect(new URL("/", request.url));
	if(isAuthenticated && (currentPath == '/login' || currentPath == '/signup'))
		return NextResponse.redirect(new URL("/", request.url));
	if((!isAuthenticated || !isAnAuthor) && (currentPath === "/profile/my-articles"))
		return NextResponse.redirect(new URL("/", request.url));
	if (!isAuthenticated && currentPath.startsWith("/admin"))
		return NextResponse.redirect(new URL("/", request.url));
	if (!isAuthenticated && currentPath.startsWith("/profile"))
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
