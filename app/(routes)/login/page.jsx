'use client'
import { useForm } from "react-hook-form";
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Key from '@mui/icons-material/Key';
import styles from "../../styles/subscribe.module.css"

export default function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <>
   <section className= {styles.containerForm}>
    <h1 className="header"> تسجيل</h1>
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
       <Stack spacing={1}>

        <FormControl>
          <FormLabel>البريد الالكتروني</FormLabel>
          <Input  placeholder="البريد الالكتروني"{...register("email", {required: "يجب ادخال الاسم"})} />
          {errors.email && <FormHelperText className = "warning">{errors.email.message}</FormHelperText>}
        </FormControl>

        <FormControl>
          <FormLabel>الرمز السري</FormLabel>
          <Input
          type="password"
          placeholder="Type in here…"
          startDecorator={<Key />}
          {...register("password", {required: "يجب ادخال الرمز"})}
          />
          {errors.email && <FormHelperText className = "warning">{errors.password.message}</FormHelperText>}
        </FormControl>

      <button className="button-28" type="submit"> دخول</button>
      </Stack>
    </form>
    </section>
    </>
  );
}