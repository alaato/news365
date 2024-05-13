import { Avatar } from '@mui/joy'
import connect from "@/app/utils/connect";
import Article from "@/app/models/articleModel";
import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import  './Article.css'
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
    <article className='article container'>
    <section className='article-header'>
         <h1 className='article-title'>{article.title}</h1>
         <div className='author'>
         <Avatar alt={article.author}  size="lg"></Avatar>
         <div>{article.author}</div>
         </div>
         <h3 className='publish-date'> نشر في تاريخ : {article.publishedAt.toLocaleString('en-US')}</h3>
         <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
         <img className='article-image' src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="" />
         </div>
         <section className='article-content'>
            { parse(article.content)}
         </section>
     </section>
 </article>
  )
}

export default article