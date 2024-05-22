import connect from '@/app/utils/connect'
import User from '@/app/models/userModel';
import VerifyEmailPage from '@/app/components/verifyEmail/verifyEmailPage';
import {GenerateNewToken} from "@/app/utils/serverActions/serverActions"
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

const verifyEmailPage = async ({params}) => {
  try {
      const verifiedData = await verifyEmail(params);
      if(!verifiedData)
        return new Error('somrthing failed');
      return <VerifyEmailPage verified={verifiedData} GenerateNewToken={GenerateNewToken} />;
  }
  catch (error) {
    console.log(error);
    throw error;
  }
}

export default verifyEmailPage