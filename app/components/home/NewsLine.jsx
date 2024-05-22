import React from 'react'
import Box from '@mui/material/Box';
import Post from './Post.tsx';
import "./Newsline.css"
import connect from "@/app/utils/connect";
import Article from "@/app/models/articleModel";

  async function fetchArticles(category) {
    try {
      await connect();
      const allArticle = await Article.find({category: category}).sort({publishedAt: -1}).limit(4)
      return allArticle;
      } catch (error) {
          console.error('database error : ',error);
          throw new Error(error);
      }
    }
    

async function NewsLine({title}) {
  const articles = await fetchArticles(title);
  return (
    <Box className = "container" >
            <h2>
                {title}
            </h2>
        <Box className = "container newsline" >
                {articles.map((article) =>{
                  return <Post key={article.id} article ={article} className = {"line-item"} />
                })}
        </Box>
    </Box>
  )
}
export default NewsLine;