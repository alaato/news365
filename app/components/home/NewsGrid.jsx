import React from 'react'
import Box from '@mui/material/Box';
import Post from "./Post"
import FeaturedPost from './FeaturedPost';
import './newsgrid.css'
import connect from "@/app/utils/connect";
import Article from "@/app/models/articleModel";

  async function fetchArticles(categories) {
    try {
      await connect();
      const allArticles = [];
      for(let category of categories){
         const article = await Article.findOne({category: category.category}).sort({publishedAt: -1}).limit(1)
         allArticles.push(article)      
        }
      return allArticles;
      } catch (error) {
          console.error('database error : ',error);
          throw new Error(error);
      }
    }
    async function fetchFeatured()
    {
      await connect();
      const featured = await Article.findOne({featured: true});
      if (featured) return featured;
      else if (featured === null)
      {
        const latest = await Article.findOne({}).sort({publishedAt: -1});
        return latest;
      }
       
    }
const NewsGrid = async({categories}) => {
  const articleGrid = await fetchArticles(categories);
  const featuered = await fetchFeatured();
  
  return (
    <Box  className = 'container'>
        <Box className = 'grid'>
            <FeaturedPost article = {featuered} sx={{ gridArea: 'feature',} }/>
            <Post article={articleGrid[0]} sx={{ gridArea: 'news1' } }  key={1} />
            <Post article={articleGrid[1]} sx={{ gridArea: 'news2' }}  key={2}/>  
            <Post article={articleGrid[2]} sx={{ gridArea: 'news3' }} key= {4}/>
            <Post article={articleGrid[3]} sx={{ gridArea: 'news4' } }  key={5}/>
        </Box>
    </Box>
  )
}

export default NewsGrid