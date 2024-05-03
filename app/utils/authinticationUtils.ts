import customError from "./customError";
import { cookies } from "next/headers";
import { getDataFromSession } from "./tokenUtils";
import { sessionData } from "./intrfaces";


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
