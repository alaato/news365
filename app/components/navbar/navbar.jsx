'use client'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SubMenu from "./subMenu"
import "./navbar.css"
import Hamburger from './hamburger'
import Link from "next/link";
import React, { useState, useEffect } from 'react'
import { connect } from "mongoose";


const pages = ["أخبار" , "تحقيقات", "أراء","صحف و مجلات", "من نحن", "اتصل بنا" ];
const pagesEn = ["news" , "investegations", "opinions","newspapers", "about", "contact" ];

function Navbar() {
  const [anchorSub, setAnchorSub] = React.useState(false);
  const [sub, setSub] = useState([])
  
  useEffect(() =>{
    fetch('/api/categories')
    .then((response) => response.json())
    .then((data) => {
      setSub(data); // Set the initial data to the state
    })
    .catch((error) => {
      console.error('Error fetching initial data from backend:', error);
      // throw new Error(error)
    });
  }, [])


  const handleOpenSub = (event) => {
    setAnchorSub(event.currentTarget);
  };
  const handleCloseSub = () => {
    setAnchorSub(false);
    console.log(anchorSub);
  };
  
  return (
    <AppBar sx={{backgroundColor : "black"}} position="sticky">
      <Container maxWidth="xl">
        <Toolbar
          sx={{ flexDirection: "row-reverse", justifyContent: {xs : "start", md : "center"}, alignItems : "center" }}
          disableGutters
        >
            <Hamburger sub = {sub} pagesEn={pagesEn} handleOpenSub = {handleOpenSub} handleCloseSub={handleCloseSub} anchorSub={anchorSub} sx = {{alignSelf : "start"}} pages = {pages}/>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" }
            }}
          >
            {pages.map((page, i) => {
              if(page !== "تحقيقات" && page !== "صحف و مجلات")
                return(
                  page === "أخبار"?  <button className = "nav-link" key={page} onClick={handleOpenSub} title = "أخبار">أخبار</button>
                :
                <Link key={i} className="nav-link" href={'/'+pagesEn[i]}>{page}</Link>
                )
                else
                  return (
                  <Link key={i} className="nav-link" href={'/news/'+page}>{page}</Link>
                  )
              })}
            <SubMenu sub = {sub} handleCloseSub={handleCloseSub} anchorSub={anchorSub}/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;