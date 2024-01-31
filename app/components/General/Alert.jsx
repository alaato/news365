import React, { useContext } from 'react'
import Alert from '@mui/joy/Alert';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import WarningIcon from '@mui/icons-material/Warning';
import Button from "@mui/joy/Button";
import { AlertContext } from './alertContext';
export default function Toast(props){
    const {message, status} = props
    const [isAlert, setAlert] = useContext(AlertContext);
  return (
    <section className='Alert'>
        {
            isAlert && status == "success" &&
            <Alert sx={{marginTop: 3}} variant="soft" color="success" startDecorator={<AccountCircleRoundedIcon />} endDecorator={
            <Button variant="plain" size="sm" color="success" onClick={()=>setAlert(false)}><CloseRoundedIcon /></Button>}>
                {message}
            </Alert>}
      {
        isAlert && status == "error"  && <Alert
            sx={{ alignItems: 'flex-start', marginTop: '16px' }}
            startDecorator={<WarningIcon/>}
            variant="soft"
            color="danger"
            endDecorator={
            <Button onClick={()=>setAlert(false)} variant="soft" color="danger">
                <CloseRoundedIcon />
            </Button>
          }
        >
          <div>
            <h3>خطأ</h3>
            <p>
              {message}
            </p>
          </div>
        </Alert>}
    </section>

  )
}