"use client"
import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from '@mui/material';
import Link from 'next/link';
function PagePagination({ pageCount, category, href}) {
	
	return (
		<Pagination sx={{ margin: "auto" }} count={pageCount} hidePrevButton hideNextButton
			renderItem={(item) => (<PaginationItem component={Link} href={href+item.page} {...item} />)} />
	)
}

export default PagePagination