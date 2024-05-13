"use client"
import React, { forwardRef } from "react"
import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import UserInfoForm from "./UserInfoForm";
import { ProfileInfoProps } from "@/app/utils/intrfaces";

const InfoForm = forwardRef(function InfoForm({user}:ProfileInfoProps, ref) {
  console.log(user)
  return (
    <Card>
    <Box sx={{ mb: 1 }}>
      <Typography level="title-md">معلومات شخصية</Typography>
      <Typography level="body-sm">
        قم  بتخصيص  معلومات ملفك الشخصي.
      </Typography>
    </Box>
    <Divider />
    <UserInfoForm avatar={user.Avatar} username={user.username} email={user.email} id={user.id}/>
  </Card>
 
  )
})
export default InfoForm