import connect from "@/app/utils/connect";
import User from "@/app/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import sendEmail from "@/app/utils/mail";
import { render } from '@react-email/render';
import Email from "@/app/components/email";
import jwt from "jsonwebtoken"
import { revalidatePath } from "next/cache";

export async function POST(req) {
	try {
		connect();
		const body = await req.json();
		if (!body)
			throw new Error
		const { username, email, password } = body
		const isEmail = await User.findOne({ email })
		if (isEmail)
			return NextResponse.json({ message: " يوجد حساب بهذا الايميل " }, { status: 400 });

		bcrypt.hash(password, 10, async function (err, hash) {
			if(err) throw err
			const newUser = new User({
				username: username,
				password: hash,
				role: 'user',
				email: email,
				verifiedToken: jwt.sign(email, 'token'),
				verifiedTokenExpires: Date.now() + 7200000
			});
			await newUser.save();
			const message = `https://news365-three.vercel.app/verify/${newUser.id}/${newUser.verifiedToken}`;
			const emailHtml = render(<Email url={message} username={newUser.username} />, { pretty: true });
			await sendEmail(newUser.email, "Verify Email", emailHtml)
		});
		revalidatePath('/', 'layout')
	return NextResponse.json({ message: " تم انشاء الحساب. الرجاء تفعيل الحساب من البريد الالكتروني " }, { status: 201 });
} catch (error) {
	console.log(error);
	return NextResponse.json({ message: "يوجد خطأ ما, الرجاء اعادة المحاولة" }, { status: 500 });
}
}