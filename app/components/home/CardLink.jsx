"use client"
import React from 'react'
import NextLink from 'next/link';
import Link from '@mui/joy/Link';
const CardLink = ({href, title}) => {
  return (
    <Link color = "neutral" component={NextLink} href = {href} overlay>
    {title}
    </Link>
      )
}

export default CardLink