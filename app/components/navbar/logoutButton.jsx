"use client"
import { useRouter } from "next/navigation";
import React from 'react'


const logoutButton = () => {
  const router = useRouter()
  const logout = async() => {
    const response = await fetch("/api/users/logout")
    if(response.ok)
      router.push('/')
  }
  return (
    <button className='button-28' onClick={logout}> logout </button>
  )
}
export default logoutButton