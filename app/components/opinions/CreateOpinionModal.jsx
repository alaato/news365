"use client"
import * as React from 'react';

import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import AddButton from './addButton';
import CreateOpinionForm from "./OpinionForm"
import Snackbar from "@/app/components/General/snackBar";

export default function BasicModalDialog() {
	const [open, setOpen] = React.useState (false);
	const [alert, setAlert] = React.useState({ on: false, message: "", type: "" });

	return (
		<React.Fragment>

			<Snackbar setAlert={setAlert} on={alert.on} message={alert.message} type={alert.type}></Snackbar>
			<AddButton
				onClick={() => setOpen(true)}
			/>
			<Modal open={open} onClose={() => setOpen(false)}>
				<ModalDialog>
					<DialogTitle>إبداء رأي جديد</DialogTitle>
					<DialogContent>املأ المعلومات.</DialogContent>
					<CreateOpinionForm setAlert={setAlert} setOpen={setOpen}/>
				</ModalDialog>
			</Modal>
		</React.Fragment>
	);
}