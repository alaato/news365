import React from 'react'
import BlogPost from "../../../components/category/BlogPost"
import styles from "@/app/styles/profile/myarticles.module.css"
import {getDataFromSession} from '@/app/utils/tokenUtils'
import Article from '@/app/models/articleModel'
import Pageintion from "@/app/components/General/PagePagination"
const MyArticles = async () => {
	const userData = await getDataFromSession();
	const id = userData? userData.id : null;
	const articles = await Article.find({author:id}).sort({publishedAt:-1}).lean({virtuals:true})
	return (
		<section className='container flex-col'>
			<h2>كل مقالاتي</h2>
			<div className={styles.myArticlesContainer}>
				{
					articles && articles.map(article => <BlogPost userId={id} BlogPost href={"/news/" + article.category + '/' + article.id} key={article.id} article={article}></BlogPost>)
				}
			</div>
		</section>
	)
}

export default MyArticles