"use client"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import "./opinion.css"
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import { Box, Link } from '@mui/joy';
import parse from "html-react-parser"
import { ModalOverflow } from '@mui/joy';
import {ModalClose} from '@mui/joy';
import OpinionEditAndDeleteBUttons from "./OpinionEditAndDeleteButtons"
export default function Opinion({ opinion }) {
	const { title, content, author, _id } = opinion;
	const [open, setOpen] = React.useState(false)
	return (
		<div>
			<Card
				sx={{ width:{sm: "80vw", md:"420px", lg:"360px"}, overflowWrap:"break-word"}}
				variant="outlined"
			>
				<Avatar src={author && author.Avatar} size="lg" />
				<CardContent>
					<h2 level="title-lg">{title}</h2>
					<Link component="button" onClick={() => setOpen(true)} overlay></Link>
				</CardContent>
				<OpinionEditAndDeleteBUttons opinionId={opinion._id} authorId={author && author._id}/>
			</Card>
			<Modal dir="auto" open={open} onClose={() => setOpen(false)}>
				<ModalOverflow>
					<ModalDialog sx={{overflow: "auto", overflowWrap: "break-word", maxWidth:"1200px", minWidth:{xs:"90vw", lg:"1200px"}}}>
						<ModalClose />
						<h3>{title}</h3>
						<Box>
							{parse(content)}
						</Box>
					</ModalDialog>
				</ModalOverflow>
			</Modal>
		</div>
	);
}