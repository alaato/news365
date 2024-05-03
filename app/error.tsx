'use client' // Error components must be Client Components

import Image from 'next/image'
import Link from 'next/link' 
import customError from './utils/customError'

export default function Error({ error,  reset }) {

  return (
    <div className='container flex-col'>
      <h2> {error.message} </h2>
      <Image src='/sad.svg' width="256" height="256" alt=''></Image>
      <Link href="/">عد الى الصفحة الرئيسية</Link>
    </div>
  )
}