import React from 'react'
import CategoryPage from '@/app/components/category/CategoryPage'
import { notFound } from 'next/navigation'
import connect from "@/app/utils/connect";
import Category from "@/app/models/CategoryModel";

async function getCategory(category) {
  try {
    await connect();
    console.log('Loading....');
    const foundCategory = await Category.findOne({category: category})
    console.log(foundCategory);
    return foundCategory;
    } catch (error) {
        console.error('database error : ',error);
        throw new Error(error);
    }
  }
const page = async ({params}) => {
  
  let {category} = params
  category = decodeURIComponent(category);
  const found = await getCategory(category);
  if(found == null) return notFound()
  return (
    <CategoryPage category = {found.category}/>
  )
}

export default page