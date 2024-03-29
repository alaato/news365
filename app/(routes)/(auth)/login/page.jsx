'use client'
import { useForm } from "react-hook-form";
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Key from '@mui/icons-material/Key';
import styles from "@/app/styles/subscribe.module.css"
import React, { useState } from "react";
import Button from "@mui/joy/Button";
import Alert from "@/app/components/General/Alert";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { AlertContext } from "@/app/components/General/alertContext";
import { useRouter } from "next/navigation";



const schema = yup
  .object({
    email: yup.string().email("يجب ادخال بريد الالكتروني صحيح").required("البريد الالكتروني ضروري"),
    password: yup.string().min(6,"اقل شي 6 حروف او ارقام").required("الرمز السري ضروري"),
  })
  .required()

export default function Login() {
  const router = useRouter()
  const {handleSubmit, register , formState: { errors, isSubmitSuccessful }, reset } = useForm({resolver: yupResolver(schema)});
  const [isAlert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [Status, setStatus] = useState("");
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async data =>{
    const body = JSON.stringify(data);
    const response = await fetch('/api/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: body
        })
    const responseBody = await response.json();

    if(response)
    {
      console.log(responseBody)
      try {  
        if(!response.ok)
          setStatus("error")
        else 
        setStatus("success");
        setAlert(true);
        setMessage(responseBody.message);
        setLoading(false);
        // router.push('/')
        }
      catch (error) {
        setAlert(true);
        setMessage(responseBody.message);
        setLoading(false);
      }
        }
  } 

  return (
    <>
    <AlertContext.Provider value={[isAlert, setAlert]}>
    <Alert status={Status} message={message}></Alert>
    </AlertContext.Provider>
   <section className= {styles.containerForm}>
    <h1 className="header"> تسجيل</h1>
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
       <Stack>

        <FormControl>
          <FormLabel>البريد الالكتروني</FormLabel>
          <Input error={Boolean(errors.email)}  placeholder="البريد الالكتروني"{...register("email", {required: "يجب ادخال الاسم"})} />
          {errors.email && <FormHelperText className ={styles.warning}>{errors.email.message}</FormHelperText>}
        </FormControl>

        <FormControl sx={{marginTop: '1rem'}}>
          <FormLabel>الرمز السري</FormLabel>
          <Input
          error={Boolean(errors.password)}
          type="password"
          placeholder="يجب ادخال الرمز"
          startDecorator={<Key />}
          {...register("password", {required: "يجب ادخال الرمز"})}
          />
          {errors.password && <FormHelperText className ={styles.warning}>{errors.password.message}</FormHelperText>}
        </FormControl>

      <Button sx={{marginTop: '1.5rem', width:"120px"}} loading={isLoading} className="button-28"  type="submit"> دخول</Button>
      </Stack>
    </form>
    </section>
    </>
  );
}