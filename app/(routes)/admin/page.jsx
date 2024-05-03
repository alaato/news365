import styles from "@/app/styles/subscribe.module.css"
import CreatePostForm from '@/app/components/admin/createPost/createPostForm'
const page = () => {
  return (
    <section className= {styles.containerForm} >
      <h1 className="header">لوحة المسؤول</h1>
      <CreatePostForm/>
    </section>
  )
}

export default page