import React from 'react'
import Article from '../../../../components/Article/Article'


const page = ({params}) => {
  return (
    <Article id={params.article}/>
    )
}

export default page