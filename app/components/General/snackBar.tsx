import React from 'react'
import Snackbar from '@mui/joy/Snackbar';

const SnackBar = ({on, message, type, setAlert} : {on:boolean, message:string, type:"danger"|"success", setAlert: Function}) => {
	return (
		<Snackbar
			autoHideDuration={3000}
			variant="soft"
			color={type}
			open={on}
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			onClose={()=>setAlert}
		>
			{message}
		</Snackbar>
	)
}

export default SnackBar