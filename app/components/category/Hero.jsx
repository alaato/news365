import React from 'react'
import Post from '../home/Post';

const Hero = ({h2, article}) => {
  return (
    <section className='container hero'>
        <h2>{h2}</h2>
        <Post className={'hero-post'} article={article} />
    </section>
  )
}

export default Hero