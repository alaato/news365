import React from 'react'
import NewsGrid from './NewsGrid';
import NewsLine  from './NewsLine';
import connect from "@/app/utils/connect";
import Category from "@/app/models/CategoryModel";

async function getCategories() {
  try {
    await connect();
    const allCategories= await Category.find({}).sort({publishedAt: -1}).limit(4)
    return allCategories;
    } catch (error) {
        console.error('database error : ',error);
        throw new Error(error);
    }
  }
  
const Home = async() => {
  const subs = await getCategories();
  return (
    <>
        <NewsGrid categories={subs}/>
        {subs.map((sub, i) => (
                    <NewsLine key={i} title={sub.category}/>
        ))}
        </>
  )
}

export default Home