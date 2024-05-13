"use client"
import React, { FC } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import { Select, Textarea, Option } from "@mui/joy";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/subscribe.module.css"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import Tiptap from "@/app/components/admin/createPost/Editor"
interface FormProps{
	categories : string[]
	Author: string
}

const schema = yup
  .object({
    title: yup.string().required("البريد الالكتروني ضروري"),
    content: yup.string().required("الرمز السري ضروري"),
	category: yup.string().required("الرمز السري ضروري")
  })
  .required()

type FormData = yup.InferType<typeof schema>;
const CreatePostForm: FC<FormProps>= (props) => {
	const {categories, Author} = props;
	const router = useRouter();
	const { register, handleSubmit, formState: { errors } } = useForm<FormData>({resolver: yupResolver(schema)});
	const onSubmit  = async (data : FormData) => {
		const formBody = {author:Author, ...data}
		const response = await fetch('/api/admin/create/article', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formBody),
		})
		if(response.ok) {
			const article = await response.json()
			router.push(`/news/${article.category}/${article._id}`)
		}
	}
	return (
		<form className={styles.form} style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={1}>
				<FormControl>
					<FormLabel color="black">العنوان</FormLabel>
					<Input placeholder="العنوان"{...register("title")} />
					{errors.title && <FormHelperText className={styles.warning}>{`${errors.title?.message}`}</FormHelperText>}
				</FormControl>

				<FormControl>
					<FormLabel>النص</FormLabel>
					<Textarea minRows={10} placeholder="النص" {...register("content")} />
					{errors.content && <FormHelperText className={styles.warning}>{`${errors.content?.message}`}</FormHelperText>}
				</FormControl>

					<Tiptap content={""} />

				<FormControl>
					<FormLabel>الفئة</FormLabel>
					<Select {...register("category")}>
						{
							categories.map((category, index)=> <Option key={index} value={category}>{`${category}`}</Option>)
						}
					</Select>
					{errors.content && <FormHelperText className={styles.warning}>{`${errors.category?.message}`}</FormHelperText>}

				</FormControl>

				<button className="button-28" type="submit"> ارسال</button>
			</Stack>
		</form>
	)
}

export default CreatePostForm
