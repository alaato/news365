import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getDataFromSession } from "./app/utils/tokenUtils";
// This function can be marked `async` if using `await` inside
export async function  middleware(request: NextRequest) {
	const session = request.cookies.get("session")?.value;
	const isAuthenticated = session? true: false;
	const currentPath = request.nextUrl.pathname;

	if (isAuthenticated && (currentPath == "/login" || currentPath == "/signup"))
		return NextResponse.redirect(new URL("/", request.url));
	if (!isAuthenticated && currentPath.startsWith("/profile"))
		return NextResponse.redirect(new URL("/login", request.url));
	if (currentPath.startsWith("/admin"))
		{
			if(!isAuthenticated)
				return NextResponse.redirect(new URL("/", request.url));
			const data = await getDataFromSession(session)
				if(data)
					return NextResponse.json({status: 401, message: "غير مصرح به، يرجى التحقق من أنك مؤلف"});
		}
}

export const config = {
	matcher: [
		"/login",
		"/signup",
		"/api/users",
		"/profile/:path*",
		"/admin/:path*",
	],
};
