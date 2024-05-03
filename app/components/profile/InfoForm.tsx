"use client"
import React, { forwardRef } from "react"
import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import UserInfoForm from "./UserInfoForm";

const InfoForm = forwardRef(function InfoForm({props}, ref) {
  const {firstName, lastName, email } = props
  return (
    <Card>
    <Box sx={{ mb: 1 }}>
      <Typography level="title-md">معلومات شخصية</Typography>
      <Typography level="body-sm">
        قم  بتخصيص  معلومات ملفك الشخصي.
      </Typography>
    </Box>
    <Divider />
    <UserInfoForm firstName={firstName} lastName={lastName} email={email}/>
  </Card>
 
  )
})
export default InfoForm