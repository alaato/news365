import React from 'react'
import Hero from '@/app/components/category/Hero';
import BlogGrid from '@/app/components/category/BlogGrid';
import "./MainPage.css"
import { Suspense } from 'react';
import { HeroSkeleton, BlogGridSkeleton } from '../skeleton/skeletons';
import { fetchLatestCategory } from '@/app/utils/fetchData'

const CategoryPage = async ({ category, page }) => {
	const featured = await fetchLatestCategory(category);
	return (
		<main className='main container'>
			<Suspense fallback={<HeroSkeleton />}>
				<Hero article={featured} h2={"أخر " + (category == 'وسائط' ? "مصورة" : category)} />
			</Suspense>
			<Suspense fallback={<BlogGridSkeleton />}>
				{category && <BlogGrid category={category} page={page}/>}
			</Suspense>
		</main>
	)
}

export default CategoryPage;