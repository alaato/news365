"use client"
import { revalidatePath } from 'next/cache'
import React from 'react'

const deletePostButton = ({className, id}) => {
    const deletePost = async ()=>{
        const response = await fetch(`/api/admin/post/delete/${id}`, {method: 'DELETE'})
        if(response.ok)
            revalidatePath("/")
      }
  return (
    <button onClick={deletePost} className={className}>
    مسح المنشور
    </button>
  )
}

export default deletePostButton