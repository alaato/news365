import { isAuthor } from "@/app/utils/authinticationUtils"
import customError from "@/app/utils/customError"
import { getDataFromSession } from "@/app/utils/tokenUtils"
import { cookies } from "next/headers"
import { sessionData } from "@/app/utils/intrfaces"
import CreatePost from "@/app/components/admin/createPost/createPost"
import { getCategoriesNames } from "@/app/utils/fetchData"
const page = async () => {
  const categories = await getCategoriesNames();
  const session = cookies().get("session")?.value
  const userData = await getDataFromSession(session) as unknown as sessionData;
  if(!userData)
    throw new customError("هناك خطأ، هل لديك تصريح للوصول إلى هذه الصفحة؟", 500);
  const isauthor = await isAuthor(userData);
  if(!isauthor)
    throw new customError("ليس لديك تصريح للوصول إلى هذه الصفحة، فأنت لست مؤلفًا", 401)
  const author = userData.username;
  return (
    <CreatePost author={author}></CreatePost>
  )
}

export default page