"use client"
import { searchArticles } from '@/app/utils/serverActions/serverActions';
import React, { useEffect, useState } from 'react'
import BlogPost from "@/app/components/category/BlogPost"
import styles from "@/app/styles/profile/myarticles.module.css"
import { useSearchParams } from 'next/navigation'

const SearchForm = () => {
	const searchParams = useSearchParams()
	const query = searchParams.get('q')
	const [searchResults, setSearchResults] = useState([]);

	async function handleSubmit(data) {
		const searchTerms = data.get("searchTerms")
		const foundArticles = searchTerms ? await searchArticles(searchTerms) : [];
		setSearchResults(foundArticles);
	}

	useEffect(()=>{
		(async function () {
			const foundArticles = query? await searchArticles(query): null;
			if(foundArticles)
				setSearchResults(foundArticles)
		}());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<div className='container flex-col'>

			<form  action={handleSubmit}>
				<input name='searchTerms' type="text" />
			</form>
			<div className={styles.myArticlesContainer}>
				{searchResults.length ? searchResults.map(article => <BlogPost BlogPost href={"/news/" + article.category + '/' + article._id} key={article._id} article={article}></BlogPost>) : <h2>No results</h2>}

			</div>
		</div>

	)
}

export default SearchForm