import React from 'react'
import CategoryPage from '@/app/components/category/CategoryPage'
import { notFound } from 'next/navigation'
import { getCategory } from '@/app/utils/fetchData'

const page = async ({params}) => {
  
  let {category} = params
  category = decodeURIComponent(category);
  const found = await getCategory(category);
  if(!found) return notFound()
  return (
    <CategoryPage category = {found.category}/>
  )
}

export default page