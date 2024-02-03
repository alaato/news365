"use client"
import { useState }  from 'react'
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Alert from "@/app/components/General/Alert";
import { AlertContext } from "@/app/components/General/alertContext";
import { useRouter } from 'next/navigation';


const verifyEmailPage = ({verified, GenerateNewToken}) => {
    const [isAlert, setAlert] = useState(false);
    const [message, setMessage] = useState("");
    const [Status, setStatus] = useState("");
    const router = useRouter()    

    const newToken = async (e) =>
    {
        const res = await GenerateNewToken();
        setAlert(true);
        setMessage(res.message);
        setStatus(res.status);
    }
    const redirect = function ()
    {
        router.push("/login")
    }
  return (
    <section  className='fullview flex-col'>
    <AlertContext.Provider value={[isAlert, setAlert]}>
        <Alert status={Status} message={message}></Alert>
    </AlertContext.Provider>
    <Card
    sx={{
        margin:'1rem',
      textAlign: 'center',
      alignItems: 'center',
      width: 343,
      overflow: 'auto',
    }}
  >
    {
    verified.username && <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
      🎊{verified.username} اهلا  🎊
    </Typography>
    }
    
    <CardContent sx={{ maxWidth: '40ch' }}>
      {verified.message}
    </CardContent>
    <CardActions
      orientation="vertical"
      buttonFlex={1}
      sx={{
        '--Button-radius': '40px',
        width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
      }}
    >
      <Button  href="/login"  onClick={verified.ok? redirect : newToken } variant="outlined" color="neutral"> {verified.ok? 'تسجيل الدخول': ' اعد ارسال بريد التاكيد' }</Button>
    </CardActions>
  </Card>
  </section>
  
  )
}

export default verifyEmailPage