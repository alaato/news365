import React from 'react'
import NextLink from 'next/link';
import { Link } from '@mui/joy';

export const OverlayLink = ({content, href}) => {
  return (
    <Link
    component={NextLink}
    overlay
    underline="none"
    href= {href}
    sx={{ color: 'text.tertiary' }}
  >
    {content.slice(0,30)}...
  </Link>  )
}
