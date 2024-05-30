"use client";
import React, { useState } from "react";
import { CldUploadWidget } from 'next-cloudinary';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';


const CloudUpload = ({ children, onChange, value}) => {
	const handleSubmit = (result) => {
		const {url} = result.info;
		if(url)
			onChange(url)
	};
	const change = (data)=>{
		if(!data)
			;
		onChange(data.target.value);
		console.log(data.target.value);
	}
	return (
		<div>
			<FormLabel>الصورة</FormLabel>
			<Input defaultValue={""} onChange={change} value={value} placeholder="رابط الصورة" />
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
