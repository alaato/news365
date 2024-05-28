"use client"
import { CardActions } from "@mui/joy";
import Link from "next/link";
import DeleteButtonConfirm from "./deleteButtonConfirm"
import styles from "@/app/styles/buttons.module.css"
import { useEffect, useState } from "react";
import { useAuth } from "@/app/utils/Auth/authContext";
import {isOpinionAuthor} from "../../utils/serverActions/serverActions"

function OpinionEditAndDeleteBUttons({ opinionId, authorId }) {
	const [isTheAuthor, setIsTheAuthor] = useState(false);
	const {isAuthenticated} = useAuth();

	useEffect(()=>{
		async function checkAuthorship(authorId)
		{
			const res = await isOpinionAuthor(authorId);
			console.log(res)
			if(res.sucsses && isAuthenticated)
				setIsTheAuthor(true);
		}
		checkAuthorship(authorId);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		isTheAuthor && <CardActions buttonFlex="0 1 150px">
			<DeleteButtonConfirm opinionId={opinionId} />
		</CardActions>
	);
}

export default OpinionEditAndDeleteBUttons;