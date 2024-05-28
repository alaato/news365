import React from 'react'
import BlogPost from './BlogPost'
import { Stack } from '@mui/joy';
import { GetArticlesCategory } from '@/app/utils/fetchData';
import PagePagination from "../General/PagePagination"
const BlogGrid = async ({ category, page }) => {
	if (!page)
		page = 0;
	const articles = await GetArticlesCategory(category, page);
	return (
		<Stack className = "container" gap={2}  >
			<Stack flexGrow={1}>
				{articles.map((article) => <BlogPost href={category + '/' + article._id} key={article.id} article={article} />)}
			</Stack>
			<PagePagination page={page} category={category} href={`${category}?page=`}/>
		</Stack>
	)
}

export default BlogGrid