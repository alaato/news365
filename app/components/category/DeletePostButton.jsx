"use client"
import React from 'react'
import { useRouter } from "next/navigation";
const DeletePostButton = ({className, id}) => {
	const router = useRouter()
    const deletePost = async ()=>{
        const response = await fetch(`/api/admin/post/delete/${id}`, {method: 'DELETE'})
        if(response.ok)
           router.refresh();
      }
  return (
    <button onClick={deletePost} className={className}>
    مسح المنشور
    </button>
  )
}

export default DeletePostButton