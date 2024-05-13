"use client"
import { FormControl, FormLabel, Input, Stack } from "@mui/joy"
import React from "react"
import { useForm, SubmitHandler, Form } from "react-hook-form"
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import UploadImage from './uploadImage';
import FormHelperText from '@mui/joy/FormHelperText';
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from 'react';
import FormAction from './formActions'
import {UploadImageToCloudinary, SaveAvatarInDatabase} from "./UploadImageToCloudinary";
import Formschema from "./InfoFormSchema";

type Inputs = {
  username: string
  Email: string
  Avatar: File
}

const UserInfoForm = ({username, email, id, avatar }) => {
  const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(Formschema)})
  const form = useRef<HTMLFormElement>(null);
  const onSubmit: SubmitHandler<Inputs> = async() =>{
    const formData = new FormData(form.current);
    const Imageurl = await UploadImageToCloudinary(formData)
    console.log(Imageurl)
    await SaveAvatarInDatabase(Imageurl, id);
    }
  return (
    <form encType="multipart/form-data" ref={form} style={{flexGrow:1}} onSubmit={handleSubmit(onSubmit)}>
      <Stack className="Presonal_info" direction={{sm:"row"}} spacing={1} 
      sx={{gap : "1rem",  display:'flex', my: 1}}
      useFlexGap
      >
        <UploadImage pfp={avatar} register ={register}/>
        <Stack  sx={{flexGrow: 1}} useFlexGap spacing={1}>
          <FormControl>
              <FormLabel>اسم المستخدم</FormLabel>
              <Input value={username} error={!!errors.username} {...register("username")}  placeholder={username} />
              {errors.username && <FormHelperText >{errors.username.message}</FormHelperText>}
            </FormControl>

            <FormControl >
              <FormLabel>البريد الالكتروني</FormLabel>
              <Input value={email} error={!!errors.Email}  type="email" startDecorator={<EmailRoundedIcon />}
                placeholder={email}
                sx={{ flexGrow: 1 }}
                {...register("Email",)}
              />
                {errors.Email && <FormHelperText >{errors.Email.message}</FormHelperText>}
            </FormControl>
            
            <FormAction/>

          </Stack>
      </Stack>
    </form>
  )
}

export default UserInfoForm