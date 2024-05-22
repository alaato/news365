"use client"
import { useRouter } from "next/navigation";
import React from 'react'


const LogoutButton = ({logout}) => {
  const router = useRouter()
  const handleLogout = async() => {
    const response = await fetch("/api/users/logout")
    if(response.ok)
      {
        logout()
        router.push('/')
      }
  }
  return (
    <button className='button-28' onClick={handleLogout}> تسجيل الخروج </button>
  )
}
export default LogoutButton