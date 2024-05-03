import connect from '@/app/utils/connect'
import User from '@/app/models/userModel';
import VerifyEmailPage from '@/app/components/verifyEmail/verifyEmailPage';
import jwt  from 'jsonwebtoken';
import sendEmail from '@/app/utils/mail';
import Email from '@/app/components/email';
import { render } from '@react-email/render';

async function verifyEmail(params) {
  try{
    const {id, token} = params;
    connect();
    const user = await User.findById(id);
    if(!user)
      return {message:"لا يوجد مستخدم", ok: false};
    if(user.verifiedToken !== token)
      return {message : "يوجد خطأ ما, حاول مرة أخرى أو اعد ارسال بريد التاكيد", ok: false};
    if(user.verified)
      return {message:"لقد قمت بالفعل بتنشيط حسابك", ok: true}
    if(user.verifiedTokenExpires < Date.now())
      return {message : "لقد انتهت صلاحية الرمز المميز الخاص بك", ok: false};
    if(user && token === user.verifiedToken){
      user.verified = true;
      await user.save();
      const response = {
        username: user.username,
        message : "تم تاكيد الحساب, يمكنك تسجيل الدخول الان",
        ok: true
      };
      return response; 
    }
  }
  catch(error){
    console.log(error);
    throw new Error
  }
}
export async function GenerateNewToken(id) {
   try {
    connect();
    const user = await User.findById(id);
    if(!user)
      return {message: "يوجد خطأ ما, حاول مرة أخرى", status: "error"};
    const token = jwt.sign({email: user.email},'token');
    user.verifiedToken = token;
    user.verifiedTokenExpires =  Date.now() + 7200000
    await user.save();
    const message = `http://localhost:3000/verify/${user.id}/${user.verifiedToken}`;
    const emailHtml = render(<Email url={message} username={user.username} />,   {pretty: true});
    sendEmail(user.email, "Verify Email", emailHtml)
    return {message :" تم ارسال بريد التاكيد ,الرجاء تفعيل الحساب", status: "success"};
   } catch (error) {
    console.log(error);
    return {message: "يوجد خطأ ما, حاول مرة أخرى", status: "error"};
  }
}
async function  GenerateNewTokenServerWrapper(){
  "use server"
  return await GenerateNewToken(params.id)
}

const verifyEmailPage = async ({params}) => {
  try {
      const verifiedData = await verifyEmail(params);
      if(!verifiedData)
        return new Error('somrthing failed');
      return <VerifyEmailPage verified={verifiedData} GenerateNewToken={GenerateNewTokenServerWrapper} />;
  }
  catch (error) {
    console.log(error);
    throw error;
  }
}

export default verifyEmailPage