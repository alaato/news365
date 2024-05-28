'use client'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import SubMenu from "./subMenu"
import "./navbar.css"
import Hamburger from './Hamburger'
import Link from "next/link";
import { useState } from 'react'
import Search from "../General/search"

const pages = ["أخبار", "تحقيقات", "أراء", "صحف و مجلات", "من نحن", "اتصل بنا"];
const pagesEn = ["news", "investegations", "opinions", "newspapers", "about", "contact"];

function Navbar({ subMenu }) {
	const [anchorSub, setAnchorSub] = useState(false);

	const handleOpenSub = (event) => {
		setAnchorSub(event.currentTarget);
	};
	const handleCloseSub = () => {
		setAnchorSub(false);
		console.log(anchorSub);
	};

	return (
		<AppBar sx={{ backgroundColor: "black" }} position="sticky">
			<Container maxWidth="lg">
				<Toolbar
					sx={{ flexDirection:{md: "row-reverse"}, justifyContent: { xs: "space-between", md: "center"}, alignItems: "center" }}
					disableGutters
				>
					<Hamburger sub={subMenu} pagesEn={pagesEn} handleOpenSub={handleOpenSub} handleCloseSub={handleCloseSub} anchorSub={anchorSub} sx={{ alignSelf: "start" }} pages={pages} />

					<Search sx={{marginRight:"auto"}}/>
					<Box
						sx={{
							paddingLeft:"20px",
							flexGrow: 0,
							display: { xs: "none", md: "flex" , justifyContent:"end"}
						}}
					>
						{pages.map((page, i) => {
							if (page !== "تحقيقات" && page !== "صحف و مجلات")
								return (
									page === "أخبار" ? <button className="nav-link" key={page} onClick={handleOpenSub} title="أخبار">أخبار</button>
										:
										<Link key={i} className="nav-link" href={'/' + pagesEn[i]}>{page}</Link>
								)
							else
								return (
									<Link key={i} className="nav-link" href={'/news/' + page}>{page}</Link>
								)
						})}
						<SubMenu sub={subMenu} handleCloseSub={handleCloseSub} anchorSub={anchorSub} />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Navbar;