import { Avatar } from '@mui/joy'
import connect from "@/app/utils/connect";
import Article from "@/app/models/articleModel";
import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import  './Article.css'
import Image from 'next/image';
const getArticle = async(id) =>
{
  try {
    await connect();
    const article = await Article.findById(id);
    if (article === null) return notFound();
    return article;
    } catch (error) {
        console.error('FROM ARTICLE COMPONENT database error : ',error);
        notFound();
    }
}
const article = async ({id}) => {
  const article = await getArticle(id);
  return (
    <article className='article container'>
    <section className='article-header'>
         <h1 className='article-title'>{article.title}</h1>
         <div className='author'>
         <Avatar alt={article.author.username}  size="lg"></Avatar>
         <div>{article.author.username}</div>
         </div>
         <h3 className='publish-date'> نشر في تاريخ : {article.publishedAt.toLocaleString('en-US')}</h3>
         <div className='article-image'>
            <Image style={{objectFit: "cover"}} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={article.img} alt="" />
         </div>
         <section className='article-content'>
            { parse(article.content)}
         </section>
     </section>
 </article>
  )
}

export default article