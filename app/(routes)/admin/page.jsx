'use client'
import { useForm } from "react-hook-form";
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import styles from "../../styles/subscribe.module.css"
import { Select, Textarea ,Option} from "@mui/joy";
import { useRouter } from "next/navigation";


const page = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async(data) => {
      const response = await fetch('/api/admin/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
      )
      if(response.ok)
      {
        const article = await response.json()
        router.push(`/news/${article.category}/${article.id}`)
      }
    }
  return (
    <section className= {styles.containerForm} >
        <h1 className="header">لوحة المسؤول</h1>
        <form className={styles.form} style={{width: "100%"}} onSubmit={handleSubmit(onSubmit)}>
       <Stack spacing={1}>
        <FormControl>
          <FormLabel color= "black">العنوان</FormLabel>
          <Input  placeholder="العنوان"{...register("title", {required: "يجب ادخال العنوان"})} />
          {errors.title && <FormHelperText className = {styles.warning}>{errors.title.message}</FormHelperText>}
        </FormControl>
        
        <FormControl>
          <FormLabel>author</FormLabel>
          <Input  placeholder="author"{...register("author", {required: "يجب ادخال العنوان"})} />
          {errors.id && <FormHelperText className = {styles.warning}>{errors.id.message}</FormHelperText>}
        </FormControl>
        
        <FormControl>
          <FormLabel>النص</FormLabel>
          <Textarea minRows={10} placeholder="النص" {...register("content", {required: "يجب ادخال النص"})}/>
          {errors.content && <FormHelperText className = {styles.warning}>{errors.content.message}</FormHelperText>}
        </FormControl>
        <FormControl>
            <FormLabel>catagory</FormLabel>
            <Select {...register("category")}>
                <Option value = "analysis">
                    تحليلات
                </Option>
                <Option value = "local">
                    local
                </Option>
                <Option value = "international">
                    inter
                </Option>
            </Select>
        </FormControl>

      <button className="button-28" type="submit"> ارسال</button>
      </Stack>
    </form>
    </section>
  )
}

export default page