"use client"
import { CardActions } from "@mui/joy";
import Link from "next/link";
import DeletePostButton from "./DeletePostButton"
import styles from "@/app/styles/buttons.module.css"
import { useEffect, useState } from "react";
import { useAuth } from "@/app/utils/Auth/authContext";
function OpinioButtons({ opinion }) {
	const { _id, author } = opinion;
	const [isTheAuthor, setIsTheAuthor] = useState(false);
	const {isAuthenticated} = useAuth();


	useEffect(()=>{
		async function checkAuthorship()
		{
			const res = await fetch("/api/user/is-the-blog-author")
			const response = await res.json();
			
			if(res.ok && response.id === author.id)
				setIsTheAuthor(true);
			else
				setIsTheAuthor(false)
			console.log(response.id, author.id)
		}
		checkAuthorship();
	}, [isAuthenticated, author.id])


	return (
		isTheAuthor && <CardActions buttonFlex="0 1 150px">
			<Link className={styles.editButton + ' ' + styles.button} href={"/news/posts/edit/" + _id}>
				تعديل المنشور
			</Link >
			<DeletePostButton id={_id} className={styles.deleteButton + ' ' + styles.button}  >
			</DeletePostButton >
		</CardActions>
	);
}

export default OpinioButtons;