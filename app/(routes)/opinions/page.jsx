import React from 'react'
import Opinion from '../../components/opinios/Opinion'
const Opinions = () => {
  return (
    <>
    <section className='container flex-col'>
        <h1 className='header'>أراء</h1>
    <div className='container flex'>
       < Opinion className = "opinion"/>
       < Opinion className = "opinion"/>
       < Opinion className = "opinion"/>
    </div>
    </section>
    
    </>
  )
}

export default Opinions