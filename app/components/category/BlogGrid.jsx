import React from 'react'
import BlogPost from './BlogPost'
import { Stack } from '@mui/joy';
import { GetArticlesCategory } from '@/app/utils/fetchData';


const BlogGrid = async ({title, category}) => {
  const articles = await GetArticlesCategory(category);
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