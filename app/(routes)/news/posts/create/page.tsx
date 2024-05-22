
import CreatePost from "@/app/components/admin/createPost/createPost"
import { getAuthorData } from "@/app/utils/Auth/authinticationUtils"
import {authorData} from "@/app/utils/intrfaces"
const page = async () => {
  const author: authorData = await getAuthorData()

  return (
    <CreatePost author={author}></CreatePost>
  )
}

export default page