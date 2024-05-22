"use server"
import jwt  from 'jsonwebtoken';
import sendEmail from '@/app/utils/mail';
import Email from '@/app/components/email';
import { render } from '@react-email/render';
import User from "../../models/userModel"

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

export async function updateUser(username, email, image, id) {
	const user = await User.findByIdAndUpdate(id, {Avatar: image, username : username, email:email}, {new: true, lean: true});
	if(!user)
		throw new Error("لا يوجد هذا المستخدم")
	console.log(user)
	return {success: true, status: 200}
}