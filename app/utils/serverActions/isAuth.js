'use server'
import { cookies } from "next/headers";
export  default async function isAuthenticated() {
	const session = cookies().get("session")?.value;
	const isAuthenticated = session ? true : false;
    console.log(isAuthenticated)
	return isAuthenticated;
}
