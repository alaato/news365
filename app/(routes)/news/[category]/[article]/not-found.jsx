import Image from 'next/image'
import Link from 'next/link' 


export default async function NotFound() {
  return (
    <div className='container flex-col'>
      <h2>هذا المقال غير موجود</h2>
      <Image src='/sad.svg' width="256" height="256"></Image>
      <Link href="/">عد الى الصفحة الرئيسية</Link>
    </div>
  )
}