"use client"
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import styles from "@/app/styles/subscribe.module.css"
import { useRouter } from 'next/navigation';
import CommentField from "./commentField"
import { Button } from '@mui/joy';
import { CreateOpinion } from '@/app/utils/serverActions/serverActions';
import Editor from "../Tiptap/editor"
const OpinionForm = ({ setOpen }) => {
	const router = useRouter();
	const { control, register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = async (data) => {
		console.log(data)
		const response = await CreateOpinion(data);
		console.log("resopnse is ", response)
		setOpen(false);
	}
	return (
		<form dir='auto' className={styles.form} style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={1}>
				<FormControl>
					<FormLabel color="black">العنوان</FormLabel>
					<Input placeholder="العنوان"{...register("title", { required: "يجب ادخال العنوان" })} />
					{errors.title && <FormHelperText className={styles.warning}>{errors.title.message}</FormHelperText>}
				</FormControl>
				{/* <CommentField register={register} /> */}
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
				{errors.title && <FormHelperText className={styles.warning}>{errors.title.message}</FormHelperText>}
				<Button type='submit'>ارسال</Button>
			</Stack>
		</form>
	)
}
export default OpinionForm
