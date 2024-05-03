import * as React from 'react';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import InfoForm from './InfoForm';
import Bio from './bio';
import getDataFromToken from '@/app/utils/getDataFromToken';
import { cookies } from 'next/headers'
export default async function MyProfile() {

  const token = cookies().get('jwtToken');
  const userData = await getDataFromToken(token.value);
  console.log(userData)

  return (
    <Box sx={{display:"flex", flexDirection:"column",  flex: 1, width: '100%', justifyContent:"center", alignContent: "center", alignItems: "center"}}>
      <Typography level="h2" component="h1" sx={{ my: 3, mb: 2 }}>
            حسابي
      </Typography>
      <Stack spacing={5} sx={{width: '100%', display: 'flex', maxWidth: '800px',}}>
        <InfoForm props = {userData}/>
        <Bio/>
      </Stack>
    </Box>
  );
}
