"use client"
import React, { forwardRef } from "react"
import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import UserInfoForm from "./UserInfoForm";

const InfoForm = forwardRef(function InfoForm(props, ref) {
 
  return (
    <Card>
    <Box sx={{ mb: 1 }}>
      <Typography level="title-md">Personal info</Typography>
      <Typography level="body-sm">
        Customize how your profile information will apper to the networks.
      </Typography>
    </Box>
    <Divider />
    <UserInfoForm/>
  </Card>
 
  )
})
export default InfoForm