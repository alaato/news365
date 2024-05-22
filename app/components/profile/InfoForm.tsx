"use client"
import { forwardRef , useState} from "react"
import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import UserInfoForm from "./UserInfoForm";
import { ProfileInfoProps } from "@/app/utils/intrfaces";

const InfoForm = forwardRef(function InfoForm({ user }: ProfileInfoProps, ref) {
	const [isAlert, setAlert] = useState({on:false,status: "", message: ""});
	return (
		<Card>
			<Box sx={{ mb: 1 }}>
				<Typography level="title-md">معلومات شخصية</Typography>
				<Typography level="body-sm">
					قم  بتخصيص  معلومات ملفك الشخصي.
				</Typography>
			</Box>
			<Divider />
			<UserInfoForm setAlert = {setAlert} avatar={user.thumbnail} username={user.username} email={user.email} id={user.id} />
			{isAlert.on && <p>{isAlert.on && isAlert.message}</p>}
		</Card>
	)
})
export default InfoForm