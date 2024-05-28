import customError from "../customError";
import { sessionData } from "../intrfaces";
import { authorData } from "@/app/utils/intrfaces"
import { getDataFromSession } from "../tokenUtils";
export async function isAuthor(): Promise<boolean> {
	try {
		const userData: sessionData = await getDataFromSession()
		if (!userData)
			return false;
		const roles: string[] = userData.role;
		const isAuthor: boolean = roles.includes('author')
		if (!isAuthor)
			return false
		return true
	} catch (error) {
		throw new customError("هناك خطأ، هل لديك تصريح للوصول إلى هذه الصفحة؟", 500);
	}
}
export async function getAuthorId() {
	const userData:sessionData = await getDataFromSession()
	if(!userData)
		throw new customError("هناك خطأ، هل لديك تصريح للوصول إلى هذه الصفحة؟", 500);
	const isauthor = await isAuthor();
	if (!isauthor)
		throw new customError("ليس لديك تصريح للوصول إلى هذه الصفحة، فأنت لست مؤلفًا", 401)
	const authorId = userData.id;
	return authorId
}