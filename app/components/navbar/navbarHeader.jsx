"use client"
import React, { useEffect, useState } from 'react'
import Typography from "@mui/material/Typography";
import "./navbarHeader.css"
import Link from 'next/link';
import LogoutButton from "./logoutButton.jsx"
import isAuthenticated from "@/app/utils/serverActions/isAuth"
const navbarHeader = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    (async () => {
      const isAuth = await isAuthenticated();
      setIsAuth(isAuth);
    })();

  });
  return (
    <div className = "navbar-header">
      <div className='Nav-header-buttons'>
        {!isAuth&&<Link className='button-28' href="/signup"> اشترك</Link>}
        {!isAuth&&<Link className='button-28' href="/login"> تسجيل الدخول</Link>}
        { isAuth && <LogoutButton setIsAuth= {setIsAuth}></LogoutButton>}
      </div>

        <Typography variant="h1" component="h2">
          <Link className='logo' href="/"><span className='red'>365</span> News</Link>
          </Typography>
    </div>
  )
}

export default navbarHeader