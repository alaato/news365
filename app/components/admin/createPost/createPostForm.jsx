"use client"
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import { Select, Textarea, Option } from "@mui/joy";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/subscribe.module.css"
import Editor from '@/app/components/Tiptap/editor'

const CreatePostForm =  ({categories, author}) => {
	const router = useRouter();
	const {control, register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = async (data) => {
		const response = await fetch('/api/admin/create/post', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({author ,...data}),
		}
		)
		if (response.ok) {
			const article = await response.json()
			console.log(article)
			// router.push(`/news/${article.category}/${article.id}`)
		}
	}
	return (
		<form className={styles.form} style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={1}>
				<FormControl>
					<FormLabel color="black">العنوان</FormLabel>
					<Input placeholder="العنوان"{...register("title", { required: "يجب ادخال العنوان" })} />
					{errors.title && <FormHelperText className={styles.warning}>{errors.title.message}</FormHelperText>}
				</FormControl>

				{/* <FormControl>
					<FormLabel>النص</FormLabel>
					<Textarea minRows={10} placeholder="النص" {...register("content", { required: "يجب ادخال النص" })} />
					{errors.content && <FormHelperText className={styles.warning}>{errors.content.message}</FormHelperText>}
				</FormControl> */}
				 <Controller
					render={({field}) => (
						<Editor 
							content={field.value} 
							onChange={field.onChange}
         		/>
    )}
    control={control}
    name="editor"
    defaultValue="" 
 />

				<FormControl>
					<FormLabel>الفئة</FormLabel>
					<Select {...register("category")}>
						{categories.map(category => <Option key={category} value={category}> {category} </Option>)}
					</Select>
				</FormControl>

				<button className="button-28" type="submit"> ارسال</button>
			</Stack>
		</form>
	)
}

export default CreatePostForm
