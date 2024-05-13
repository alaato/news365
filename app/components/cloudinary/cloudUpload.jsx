"use client";
import React, { useState } from "react";
import { CldUploadWidget } from 'next-cloudinary';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';


const CloudUpload = ({ children, register }) => {
	const [url, setUrl] = useState("")
	const handleSubmit = (result) => {
		const {url} = result.info;
		if(url)
			setUrl(url)
	};
	const change = (value)=>{
		setUrl(value);
	}
	return (
		<div>
			<FormLabel>الصورة</FormLabel>
			<Input onChange={change} value={url} placeholder="رابط الصورة" {...register("img", {onChange: (e) => setUrl(e.target.value)})} />
			<CldUploadWidget
				onSuccess={handleSubmit}
				uploadPreset="articles_images">
				{({ open }) => {
					return (
						<button type="button" onClick={() => open()}>
							{children}
						</button>
					);
				}}
			</CldUploadWidget>
		</div>

	);
};

export default CloudUpload;
