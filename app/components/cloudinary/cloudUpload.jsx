"use client";
import { CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";
const CloudUpload = ({ children }) => {
	const [resource, setResource] = useState();
	return (
		<CldUploadButton
			className={styles.button}
			onUpload={(error, result, widget) => {
        if(error)
          console.log(error);
        console.log(result);
				setResource(result?.info); // { public_id, secure_url, etc }
				widget.close();
			}}
			signatureEndpoint="/api/sign-cloudinary-params"
			uploadPreset="next-cloudinary-signed"
		>
			Upload to Cloudinary
		</CldUploadButton>
	);
};

export default CloudUpload;
