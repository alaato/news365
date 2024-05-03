"server only";
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { sessionData } from "./intrfaces";
const secretKey = process.env.JWT_SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

export async function makeToken(tokenData: JWTPayload) {
	return new SignJWT(tokenData)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("7d")
		.sign(encodedKey);
}
export async function getDataFromSession(session:string) {
	try {
		const { payload } = await jwtVerify(session, encodedKey, {
			algorithms: ["HS256"],
		});
		return payload;
	} catch (error) {
		console.log(error);
	}
}

export async function createSession(userId) {
	const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
	const session = await makeToken({ userId, expiresAt });

	cookies().set("session", session, {
		httpOnly: true,
		secure: true,
		expires: expiresAt,
		sameSite: "lax",
		path: "/",
	});
}
