"use client"
import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import { Select, Option } from "@mui/joy";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/subscribe.module.css"
import Editor from '@/app/components/Tiptap/editor'
import CloudUpload from '@/app/components/cloudinary/cloudUpload'
import { yupResolver } from "@hookform/resolvers/yup"
import { Article, articleSchema } from '@/app/utils/intrfaces';
import Snackbar from '../../General/snackBar';
interface EditPostFormProps {
	categories: string[];
	article: Article;
}
const EditPostForm: React.FC<EditPostFormProps> = ({ categories, article }) => {
	const router = useRouter();
	const [alert, setAlert] = useState({on:false, message:"", type: ""});
	const { control, register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(articleSchema),
		defaultValues: article
	}
	);
	const onSubmit = async (data: any) => {
		console.log(data);
		const response = await fetch(`/api/admin/post/edit/${article._id}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ...data }),
		}
		)
		const res: { message: string } = await response.json()
		if (response.ok) {
			setAlert({on:true, message:res.message, type:"success"})
			router.push(`/news/${article.category}/${article._id}`)
		}
		else
		setAlert({on:true, message:res.message, type:"danger"})
	}
	return (
		<>
			<Snackbar setAlert={setAlert} on={alert.on} message={alert.message} type={alert.type as "danger"|"success"}></Snackbar>
			<form dir='auto' className={styles.form} style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
				<Stack spacing={1}>
					<FormControl>
						<FormLabel color="black">العنوان</FormLabel>
						<Input placeholder="العنوان"{...register("title", { required: "يجب ادخال العنوان" })} />
						{errors.title && <FormHelperText className={styles.warning}>{errors.title.message}</FormHelperText>}
					</FormControl>


					<FormControl>
						<Controller
							name="img"
							render={({ field }) => (
								<CloudUpload value={field.value} onChange={field.onChange}>او  يمكنك تحميل الصورة</CloudUpload>
							)}
							control={control}
							defaultValue=""
						/>
						{errors.img && <FormHelperText className={styles.warning}>{errors.img.message}</FormHelperText>}
					</FormControl>

					<FormControl>
						<label htmlFor="content">محتوى</label>
						<Controller
							name="content"
							render={({ field }) => (
								<Editor
									content={field.value}
									onChange={field.onChange}
								/>
							)}
							control={control}
							defaultValue=""
						/>
						{errors.img && <FormHelperText className={styles.warning}>{errors.img.message}</FormHelperText>}
					</FormControl>


					<FormControl>
						<FormLabel>الفئة</FormLabel>
						<Select defaultValue={article.category} {...register("category", { required: "يجب ادخال الفئة" })}>
							{categories.map(category => <Option key={category} value={category}> {category} </Option>)}
						</Select>
						{errors.category && <FormHelperText className={styles.warning}>{errors.category.message}</FormHelperText>}
					</FormControl>
				</Stack>
				<button className="button-28" type="submit"> ارسال</button>
			</form>
		</>
	)
}

export default EditPostForm
