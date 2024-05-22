import React from 'react'
import Hero from '@/app/components/category/Hero';
import BlogGrid from '@/app/components/category/BlogGrid';
import "./MainPage.css"
const { translate } = require('bing-translate-api');
import { Suspense } from 'react';
import {HeroSkeleton, BlogGridSkeleton} from '../skeleton/skeletons';
import {fetchLatestCategory} from '@/app/utils/fetchData'

const CategoryPage = async ({category}) => {
  const featured = await fetchLatestCategory(category);
  return (
  <main className='main container'>
    <Suspense fallback = {<HeroSkeleton/>}>
    <Hero article={featured} h2 = {"أخر " +(category == 'وسائط'? "مصورة": category )} />
    </Suspense>
    <Suspense fallback = {<BlogGridSkeleton/>}>
    <BlogGrid category={category} />
    </Suspense>
  </main>
  )
}

export default CategoryPage;