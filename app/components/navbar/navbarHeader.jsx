import React from 'react'
import Typography from "@mui/material/Typography";
import "./navbarHeader.css"
import Link from 'next/link';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";



const navbarHeader = () => {
  return (
    <div className = "navbar-header">
      <div className='Nav-header-buttons'>
        <Link className='button-28' href="/subscribe"> اشترك</Link>
        <Link className='button-28' href="/login"> تسجيل الدخول</Link>
      </div>
        
        <Typography variant="h1" component="h2">
          <Link className='logo' href="/"><span className='red'>365</span> News</Link>
          </Typography>
    </div>
  )
}

export default navbarHeader