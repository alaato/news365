import * as React from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DeleteForever from '@mui/icons-material/DeleteForever';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { deleteOpinion } from '@/app/utils/serverActions/serverActions';
import { useRouter } from 'next/navigation';
import { Typography } from '@mui/joy';
import Snackbar from '@mui/joy/Snackbar';
export default function DeleteButtonConfirm({ opinionId }) {
	const [open, setOpen] = React.useState(false);
	const [Alert, setAlert] = React.useState({ on: false, severity: "", message: "" });
	const router = useRouter()
	const handleDelete = async () => {
		const res = await deleteOpinion(opinionId);
		console.log(res);
		if (res.sucsses) {
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
						<form action={handleDelete}>
							<Button variant="solid" type='submit' color="danger">
								الحذف
							</Button>
						</form>

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
				onClose={()=>setAlert({on:false})}
			>
				{Alert.message}
			</Snackbar>
		</React.Fragment>
	);
}
