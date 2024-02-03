'use client' // Error components must be Client Components

import Image from 'next/image'
import Link from 'next/link' 


export default  function error({ error, reset }) {
  return (
    <div className='container flex-col'>
      <h2>هناك خطأ ما</h2>
      <Image src='/sad.svg' width="256" height="256"></Image>
      <Link href="/">عد الى الصفحة الرئيسية</Link>
    </div>
  )
}