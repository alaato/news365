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
  FirstName: string
  LastName: string
  Email: string
  Avatar: File
}

const UserInfoForm = ({firstName, lastName, email }) => {
  const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(Formschema)})
  const form = useRef<HTMLFormElement>(null);
  const onSubmit: SubmitHandler<Inputs> = async() =>{
    const formData = new FormData(form.current);
    const Imageurl = await UploadImageToCloudinary(formData)
    await SaveAvatarInDatabase(Imageurl, "646846");
    }
  return (
    <form encType="multipart/form-data" ref={form} style={{flexGrow:1}} onSubmit={handleSubmit(onSubmit)}>
      <Stack className="Presonal_info"
        direction={{sm:"row"}}
        spacing={1}
        sx={{gap : "1rem",  display:'flex', my: 1}}
        useFlexGap
      >
        <UploadImage register ={register}/>
        <Stack  sx={{flexGrow: 1}} useFlexGap spacing={1}>
          <FormControl>
              <FormLabel>الاسم</FormLabel>
              <Input error={!!errors.FirstName} {...register("FirstName")}  placeholder={firstName} />
              {errors.FirstName && <FormHelperText >{errors.FirstName.message}</FormHelperText>}
            </FormControl>

            <FormControl>
              <FormLabel>اللقب</FormLabel>
              <Input error={!!errors.LastName} {...register("LastName" )} placeholder={lastName}/>
              {errors.LastName && <FormHelperText >{errors.LastName.message}</FormHelperText>}
            </FormControl>

            <FormControl >
              <FormLabel>البريد الالكتروني</FormLabel>
              <Input  error={!!errors.Email}  type="email" startDecorator={<EmailRoundedIcon />}
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