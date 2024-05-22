import { cookies } from "next/headers";
export default function isAuth() {
	const session = cookies().get("session")?.value;
	const isAuth = session ? true : false;
	return isAuth;
}
