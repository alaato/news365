
import CreatePost from "@/app/components/admin/createPost/createPost"
import { getAuthorId } from "@/app/utils/Auth/authinticationUtils"
import {authorData} from "@/app/utils/intrfaces"
const page = async () => {
  const authorId = await getAuthorId()

  return (
    <CreatePost authorId={authorId}/>
  )
}

export default page