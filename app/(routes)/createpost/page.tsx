import styles from "@/app/styles/subscribe.module.css"
import CreatePostForm from '@/app/components/admin/createPost/createPostForm'
import { isAuthor } from "@/app/utils/authinticationUtils"
import customError from "@/app/utils/customError"
import { getDataFromSession } from "@/app/utils/tokenUtils"
import { cookies } from "next/headers"
import { sessionData } from "@/app/utils/intrfaces"
const page = async () => {
  const session = cookies().get("session")?.value
  const userData = await getDataFromSession(session) as unknown as sessionData;
  if(!userData)
    throw new customError("هناك خطأ، هل لديك تصريح للوصول إلى هذه الصفحة؟", 500);
  const isauthor = await isAuthor(userData);
  if(!isauthor)
    throw new customError("ليس لديك تصريح للوصول إلى هذه الصفحة، فأنت لست مؤلفًا", 401);

  return (
    <section className= {styles.containerForm} >
      <h1 className="header">لوحة المسؤول</h1>
      <CreatePostForm props={""}/>
    </section>
  )
}

export default page