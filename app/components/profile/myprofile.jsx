import * as React from 'react';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import InfoForm from './InfoForm';
import Bio from './bio';
import customError from "@/app/utils/customError"
import { cookies } from 'next/headers'
import { getDataFromSession } from '@/app/utils/tokenUtils'
import User from "@/app/models/userModel";

export default async function MyProfile() {

	const token = cookies().get('session')?.value;
	const { id } = await getDataFromSession(token)
	if (!id)
		throw new customError("ليس لديك تصريح للوصول إلى هذه الصفحة", 401)
	const userData = await User.findById(id, ["-_id"]).lean();
	const user = { id: id, ...userData }
	return (
		<Box sx={{ display: "flex", flexDirection: "column", flex: 1, width: '100%', justifyContent: "center", alignContent: "center", alignItems: "center" }}>
			<Typography level="h2" component="h1" sx={{ my: 3, mb: 2 }}>
				تعديل حسابي
			</Typography>
			<Stack spacing={5} sx={{ width: '100%', display: 'flex', maxWidth: '800px', }}>
				<InfoForm user={user} />
				<Bio />
			</Stack>
		</Box>
	);
}
