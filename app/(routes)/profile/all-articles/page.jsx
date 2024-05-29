import React from 'react'
import BlogPost from "../../../components/category/BlogPost"
import styles from "@/app/styles/profile/myarticles.module.css"
import { getDataFromSession } from '@/app/utils/tokenUtils'
import Article from '@/app/models/articleModel'
import PagePagination from "@/app/components/General/PagePagination"
import { Suspense } from 'react'
const MyArticles = async ({ searchParams }) => {
	const { page } = searchParams;
	const userData = await getDataFromSession();
	const id = userData ? userData.id : null;
	const skip = !page ? 0 : (page - 1) * 9
	const articles = await Article.find({ author: id }).skip(skip).limit(9).sort({ publishedAt: -1 }).lean({ virtuals: true })
	const articleCount = await Article.countDocuments({ author: id })
	const PageCount = Math.ceil(articleCount / 10);
	return (
		<section className='container flex-col'>
			<h2>كل مقالاتي</h2>
			<Suspense fallback={<h3>Loading...</h3>}>
				<div className={styles.myArticlesContainer}>
					{
						articles && articles.map(article => <BlogPost userId={id} BlogPost href={"/news/" + article.category + '/' + article.id} key={article.id} article={article}></BlogPost>)
					}
				</div>
			</Suspense>
			<PagePagination page={page} pageCount={PageCount} href={`?page=`} />
		</section>
	)
}

export default MyArticles