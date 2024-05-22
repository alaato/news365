import React from 'react'
import cachedDataFromSession from "../../../utils/Auth/cachedDataFromSession"
import User from "../../../models/userModel"
import BlogPost from "../../../components/category/BlogPost"
import styles from "@/app/styles/profile/myarticles.module.css"
const MyArticles = async () => {
	const { id } = await cachedDataFromSession();
	const user = await User.findById(id).populate("articles");
	const articles = user?.articles;
	return (
		<section className='container flex-col'>
			<h2>كل مقالاتي</h2>
			<div className={styles.myArticlesContainer}>
				{
					articles && articles.map(article => <BlogPost BlogPost href={"/news/" + article.category + '/' + article._id} key={article.id} article={article}></BlogPost>)
				}
			</div>
		</section>
	)
}

export default MyArticles