import React from 'react'
import Typography from "@mui/material/Typography";
import "./navbarHeader.css"
import Link from 'next/link';
import LogoutButton from "./logoutButton.jsx"
const navbarHeader = () => {
  return (
    <div className = "navbar-header">
      <div className='Nav-header-buttons'>
        <Link className='button-28' href="/signup"> اشترك</Link>
        <Link className='button-28' href="/login"> تسجيل الدخول</Link>
        <LogoutButton></LogoutButton>
      </div>

        <Typography variant="h1" component="h2">
          <Link className='logo' href="/"><span className='red'>365</span> News</Link>
          </Typography>
    </div>
  )
}

export default navbarHeader