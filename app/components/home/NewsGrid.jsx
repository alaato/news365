import React from 'react'
import Box from '@mui/material/Box';
import Post from "./Post.tsx"
import FeaturedPost from './FeaturedPost';
import './newsgrid.css'
import { fetchArticles, fetchFeatured } from '@/app/utils/fetchData';
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