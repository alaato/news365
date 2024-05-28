"use client"
import * as React from 'react';

import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import AddButton from './addButton';
import CreateOpinionForm from "./OpinionForm"
export default function BasicModalDialog() {
	const [open, setOpen] = React.useState (false);
	return (
		<React.Fragment>
			<AddButton
				onClick={() => setOpen(true)}
			/>
			<Modal open={open} onClose={() => setOpen(false)}>
				<ModalDialog>
					<DialogTitle>إبداء رأي جديد</DialogTitle>
					<DialogContent>املأ المعلومات.</DialogContent>
					<CreateOpinionForm setOpen={setOpen}/>
				</ModalDialog>
			</Modal>
		</React.Fragment>
	);
}