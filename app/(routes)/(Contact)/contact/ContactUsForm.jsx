"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import Textarea from '@mui/joy/Textarea';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';

const ContactUsForm = (className) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
<form className= {className} onSubmit={handleSubmit(onSubmit)}>
     <Stack spacing={1}>

      <FormControl>
        <FormLabel>الاسم</FormLabel>
        <Input placeholder="الاسم"{...register("Firstname", {required: "يجب ادخال الاسم"})} />
        {errors.Firstname && <FormHelperText className = "warning">{errors.Firstname.message}</FormHelperText>}
      </FormControl>

      <FormControl>
        <FormLabel>البريد الالكتروني</FormLabel>
        <Input  placeholder="البريد الالكتروني"{...register("email", {required: "يجب ادخال الاسم"})} />
        {errors.email && <FormHelperText className = "warning">{errors.email.message}</FormHelperText>}
      </FormControl>
      <FormControl>
        <FormLabel>رسالتك</FormLabel>
        <Textarea minRows={5}></Textarea>
      </FormControl>

    <button className="button-28" type="submit"> اشترك</button>
    </Stack>
  </form>  )
}

export default ContactUsForm