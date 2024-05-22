'use client'
import styles from "./upload.module.css"
import { useState } from 'react';
import { Avatar, Button } from '@mui/joy';
import AspectRatio from '@mui/joy/AspectRatio';
import { forwardRef } from 'react';

const uploadImage = forwardRef(function MyInput(props: { pfp: string, register: Function }, ref) {
	const { register, pfp } = props
	const [image, setImage] = useState(pfp);

	const SetAvatarImage = (e) => {
		const image = e.target.files[0];
		if (image) {
			const objectURL = window.URL.createObjectURL(image);
			setImage(objectURL);
		}
	}
	const deleteAvatar= () => {
		setImage("");
	}
	return (
		<div className="Avatar">
			<label className={styles.uploadButton}>
				<AspectRatio
					ratio="1"
					maxHeight={120}
					sx={{ flex: 1, maxWidth: { xs: 60 }, minWidth: 120, borderRadius: '100%', border: '1px solid' }}
				>
					<Avatar src={image} />
				</AspectRatio>
				<input {...register("Avatar")} onChange={SetAvatarImage} className={styles.hiddenInput} type="file" accept="image/png, image/jpeg, image/webp" />
			</label>
			{image && <Button variant="outlined" onClick={deleteAvatar} fullWidth color="danger" type="button"> حذف الصورة</Button>}
		</div>

	);

}
)
export default uploadImage