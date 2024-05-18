"use client"
import { useRouter } from "next/navigation";
import React from 'react'


const logoutButton = ({setIsAuth}) => {
  const router = useRouter()
  const logout = async() => {
    const response = await fetch("/api/users/logout")
    if(response.ok)
      {
        setIsAuth(false)
        router.push('/')
      }
  }
  return (
    <button className='button-28' onClick={logout}> تسجيل الخروج </button>
  )
}
export default logoutButton