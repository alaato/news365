import React from 'react'
import Box from '@mui/material/Box';
import Post from "./Post.tsx"
import FeaturedPost from './FeaturedPost';
import styles from './newsgrid.module.css'
import { fetchLatestArticles, fetchFeatured } from '@/app/utils/fetchData';
const NewsGrid = async ({ categories }) => {
	const articleGrid = await fetchLatestArticles(categories);
	if (articleGrid.length <= 0)
		return <h1>No Articles</h1>;

	const featured = await fetchFeatured();

	return (
		<Box className='container'>
			<Box className={styles.grid}>
				<FeaturedPost article={featured} sx={{ gridArea: 'feature', }} />
				{articleGrid && articleGrid.map((article, i) => <Post article={article} sx={{ gridArea: `news${i + 1}` }} key={i} />)}
			</Box>
		</Box>
	)
}

export default NewsGrid