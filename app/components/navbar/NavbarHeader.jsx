"use client"
import React from 'react'
import Typography from "@mui/material/Typography";
import "./navbarHeader.css"
import Link from 'next/link';
import AuthButtons from "./AuthButtons"
const navbarHeader = ({}) => {
	return (
		<div className="navbar-header">
			<AuthButtons/>
			<Typography variant="h1" component="h2">
				<Link className='logo' href="/"><span className='red'>365</span> News</Link>
			</Typography>
		</div>
	)
}

export default navbarHeader