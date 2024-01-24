import React from 'react'
import Article from '@/app/components/category/Article'


const page = ({params}) => {
  return (
    <Article id={params.article}/>
    )
}

export default page