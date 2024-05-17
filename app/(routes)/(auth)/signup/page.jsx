"use client"
import { useForm } from "react-hook-form";
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import styles from "@/app/styles/subscribe.module.css"
import { useRouter } from "next/navigation";
import { Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import React, { useState, useEffect } from "react";
import Alert from "@/app/components/General/Alert";
import { Button } from "@mui/joy";
import { AlertContext } from "@/app/components/General/alertContext";

//Schema validation
const schema = yup
  .object({
    username: yup.string().required('الاسم ضروري'),
    email: yup.string().email("يجب ادخال بريد الالكتروني صحيح").required("البريد الالكتروني ضروري"),
    password: yup.string().min(6,"اقل شي 6 حروف او ارقام").required("الرمز السري ضروري"),
  })
  .required()

//making context

export default function Subscribe() {
  const router = useRouter();
  const {handleSubmit, control , formState: { errors, isSubmitSuccessful }, reset } = useForm({resolver: yupResolver(schema)});
  const [isAlert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [Status, setStatus] = useState("");
  const [isDisabled, setDisabled] = useState(false);

  const onSubmit = async(data) => {
    setDisabled(true);
    const body = JSON.stringify(data);
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body
    })
    if(response) {
      const responseBody = await response.json();
      try {  
        if(!response.ok)
          setStatus("error")
        else 
          setStatus("success");
        const responseBody = await response.json();
        setAlert(true);
        setMessage(responseBody.message);
        setDisabled(false);
        }
      catch (error) {
        setAlert(true);
        setMessage(responseBody.message);
        setDisabled(false);

      }
    }
  }
  // useEffect(() => {
  //   reset()
  // }, [isSubmitSuccessful])

  return (
    <>
    <AlertContext.Provider value={[isAlert, setAlert]}>
      <Alert status={Status} message={message}></Alert>
    </AlertContext.Provider>
   <section className= {styles.containerForm}>
    <h1 className="header"> اشترك</h1>
    <form dir="auto" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
       <Stack spacing={1}>
       <FormControl >
        <FormLabel>الاسم</FormLabel>
          <Controller
          render={({ field}) => <Input error={Boolean(errors.username)} {...field} placeholder="الاسم"/>}
          defaultValue = ""
          name="username"
          control={control}
        />
        {errors.username && <FormHelperText className ={styles.warning}> {errors.username.message}</FormHelperText>}
        </FormControl>

        <FormControl>
          <FormLabel>البريد الالكتروني</FormLabel>
          <Controller
          render={({ field }) =>{
            return (
               <Input error={Boolean(errors.email)} {...field} type="email" placeholder="البريد الالكتروني" />
              )
          } 
        }
          name="email"
          defaultValue = ""
          control={control}
        />
        {errors.email && <FormHelperText className ={styles.warning}> {errors.email.message}</FormHelperText>}
        </FormControl>

        <FormControl>
              <FormLabel>الرمز السري</FormLabel>
         <Controller
          render={({ field }) =><Input error={Boolean(errors.password)}{...field} placeholder="الرمز السري"type="password" />
          }
          name="password"
          defaultValue = ""
          control={control}
        />
        {errors.password && <FormHelperText className ={styles.warning}> {errors.password.message}</FormHelperText>}
        </FormControl>


      <Button loading={isDisabled}  className="button-28" type="submit"> اشترك</Button>
      </Stack>
    </form>
    </section>
    </>
  );
}