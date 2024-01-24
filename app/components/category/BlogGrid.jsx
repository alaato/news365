import React from 'react'
import BlogPost from './BlogPost'
import { Stack } from '@mui/joy';
import connect from "@/app/utils/connect";
import Article from "@/app/models/articleModel";

async function getData(category) {
  try {
    await connect();
    console.log('Loading....');
    const allArticle = await Article.find({category: category}).sort({publishedAt: -1})
    console.log('articles fetched')
    return allArticle;
    } catch (error) {
        console.error('database error : ',error);
        throw new Error(error);
    }
  }
  
const BlogGrid = async ({title, category}) => {
  const articles = await getData(category);
 

  return (
    <section className='container article-list'>
      <h2>{title}</h2>
      <Stack spacing = {2}>
      {articles.map((article) =><BlogPost href = {category + '/' + article.id} key={article.id} article={article}/>)}
      </Stack>
    </section>
  )
}

export default BlogGrid