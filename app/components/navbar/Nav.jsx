import React from 'react'
import Navbar from './Navbar'
import NavbarHeader from './NavbarHeader'
import { getSubCategories } from '@/app/utils/fetchData'

const Nav = async () => {
	const subMenu = await getSubCategories();
	return (
		<>
			<NavbarHeader />
			<Navbar subMenu={subMenu} />
		</>
	)
}

export default Nav
