import React from 'react'
import BlogPost from './BlogPost'
import { Stack } from '@mui/joy';
import { GetArticlesCategory } from '@/app/utils/fetchData';
import PagePagination from "../General/PagePagination"
import Article from '@/app/models/articleModel';

const BlogGrid = async ({ category, page }) => {
	if (!page)
		page = 0;
	const articles = await GetArticlesCategory(category, page);
	const articleCount = await Article.countDocuments({ category: category })
	const PageCount =Math.ceil(articleCount/10);
	return (
		<Stack className = "container" gap={2}  >
			<Stack flexGrow={1}>
				{articles.map((article) => <BlogPost href={category + '/' + article._id} key={article.id} article={article} />)}
			</Stack>
			<PagePagination page={page} pageCount={PageCount} category={category} href={`${category}?page=`}/>
		</Stack>
	)
}

export default BlogGrid