import React from 'react'
import NewsGrid from './NewsGrid';
import NewsLine  from './NewsLine';
import { getCategories } from '@/app/utils/fetchData';
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