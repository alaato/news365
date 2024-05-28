"use client"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { useRouter } from 'next/navigation';
import { Typography } from '@mui/joy';
import Snackbar from '@mui/joy/Snackbar';
export default function DeletePostButton({ postId }) {
	const [open, setOpen] = React.useState(false);
	const [Alert, setAlert] = React.useState({ on: false, severity: "", message: "" });
	const router = useRouter()

	const handleDelete = async () => {
		const response = await fetch(`/api/admin/post/delete/${postId}`, { method: 'DELETE' })
		const res =await response.json();
		
		if (response.ok) {
			setAlert({ on: true, severity: "success", message: res.message })
		}
		else
			setAlert({ on: true, severity: "danger", message: res.message });
		setOpen(false)
		router.refresh();
	}

	return (
		<React.Fragment>
			<Button
				variant="outlined"
				color="danger"
				onClick={() => setOpen(true)}
			>
				الحذف
			</Button>
			<Modal open={open} onClose={() => setOpen(false)}>
				<ModalDialog variant="outlined" role="alertdialog">
					<DialogTitle>
						<WarningRoundedIcon />
						متأكد?
					</DialogTitle>
					<Divider />
					<DialogContent>
						هل أنت متأكد من رغبتك في الحذف؟
					</DialogContent>
					<DialogActions>
							<Button onClick={handleDelete} variant="solid" type='submit' color="danger">
								الحذف
							</Button>

						<Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
							الغاء
						</Button>
					</DialogActions>
					{Alert.on && <Typography color='danger'>{Alert.message}</Typography>}
				</ModalDialog>
			</Modal>
			<Snackbar
				variant="soft"
				color={Alert.severity}
				open={Alert.on}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				onClose={() => setAlert({ on: false })}
			>
				{Alert.message}
			</Snackbar>
		</React.Fragment>
	);
}
