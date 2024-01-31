import { Avatar } from '@mui/joy'
import connect from "@/app/utils/connect";
import Article from "@/app/models/articleModel";
import { notFound } from 'next/navigation';
const getArticle = async(id) =>
{
  try {
    await connect();
    console.log('Loading....');
    const article = await Article.findById(id);
    if (article === null) return notFound();
    console.log('article fetched')
    return article;
    } catch (error) {
        console.error('database error : ',error);
        notFound();
        }
}
const article = async ({id}) => {
  const article = await getArticle(id);
  return (
    <article className='container'>
    <section className='article-header'>
         <h1 className='article-title'>{article.title}</h1>
         <div className='author'>
         <Avatar size="lg">{article.author}</Avatar>
         <h3>نشر في تاريخ : {article.publishedAt.toLocaleString('en-US')}</h3>
         </div>
         <div>
         <img  className='article-image' src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="" />
         <p></p>
         </div>
         <section className='article-content'>
           <p  style={{ whiteSpace: 'pre-line' }}>
             {article.content}
           </p>
         </section>
     </section>
 </article>
  )
}

export default article