import customError from "./customError";
import { sessionData } from "./intrfaces";
import { getDataFromSession } from "@/app/utils/tokenUtils"
import { cookies } from "next/headers"
import {authorData} from "@/app/utils/intrfaces"

export async function isAuthor(userData: sessionData): Promise<boolean> {
    try {
        const roles: string[] = userData.role;
        const isAuthor: boolean = roles.includes('author')
        if(!isAuthor)
          return false
        return true
      } catch (error) {
          throw new customError("هناك خطأ، هل لديك تصريح للوصول إلى هذه الصفحة؟", 500);
        
    }
}

export async function getAuthorData() {
  const session = cookies().get("session")?.value
  const userData = await getDataFromSession(session) as unknown as sessionData
  if (!userData)
    throw new customError("هناك خطأ، هل لديك تصريح للوصول إلى هذه الصفحة؟", 500)
  const isauthor = await isAuthor(userData)
  if (!isauthor)
    throw new customError("ليس لديك تصريح للوصول إلى هذه الصفحة، فأنت لست مؤلفًا", 401)
  const author: authorData = { id: userData.id, username: userData.username }
  return author
}
