"use server"
import jwt from 'jsonwebtoken';
import sendEmail from '@/app/utils/emails/mail';
import Email from '@/app/components/email';
import { render } from '@react-email/render';
import User from "../../models/userModel"
import Article from '@/app/models/articleModel';
import connect from '../connect';
import Opinion from "@/app/models/opinionModel"
import cachedDataFromSession from '../Auth/cachedDataFromSession';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
export async function GenerateNewToken(id: string) {
	try {
		connect();
		const user = await User.findById(id);
		if (!user)
			return { message: "يوجد خطأ ما, حاول مرة أخرى", status: "error" };
		const token = jwt.sign({ email: user.email }, 'token');
		user.verifiedToken = token;
		user.verifiedTokenExpires = Date.now() + 7200000
		await user.save();
		const message = `http://localhost:3000/verify/${user.id}/${user.verifiedToken}`;
		const emailHtml = render(<Email url={message} username={user.username} />, { pretty: true });
		await sendEmail(user.email, "Verify Email", emailHtml)
		return { message: " تم ارسال بريد التاكيد ,الرجاء تفعيل الحساب", status: "success" };
	} catch (error) {
		console.log(error);
		return { message: "يوجد خطأ ما, حاول مرة أخرى", status: "error" };
	}
}

export async function updateUser(username: string, email: string, image: string, id: string) {
	const user = await User.findByIdAndUpdate(id, { Avatar: image, username: username, email: email }, { new: true, lean: true });
	if (!user)
		throw new Error("لا يوجد هذا المستخدم")
	console.log(user)
	return { success: true, status: 200 }
}

export async function searchArticles(searchTerms: string): Promise<any[]> {
	if (!searchTerms)
		return;
	const foundArticles: any[] = await Article.aggregate().
		search({
			text: {
				query: searchTerms,
				path: ["title", "content", "author.username"],
				fuzzy: { maxEdits: 1 },
			}
		}).limit(10).addFields({ _id: { $toString: "$_id" } });
	return foundArticles;
}
interface opinion {title:string, content: string}
export async function CreateOpinion(opinionBody : opinion){
	const UserData =  await cachedDataFromSession();
	if(!UserData)
		return {sucsses:false, message: "لم تقم بتسجيل الدخول"}
	const {id} = UserData;
	const opinion = new Opinion({...opinionBody, author:id})
	opinion.save();
	revalidatePath("/(routes)/opinions", "page")
	return {sucsses:true, message: "تم الحفظ بنجاح"}
}

export async function deleteOpinion(id:string)
{
	try{
		const opinion = await Opinion.findByIdAndDelete(id)
		if(!opinion)
			return {sucsses:false, message: "ليس هناك مشاركة لحذفها"}
		return {sucsses:true, message: "تم الحذف بنجاح"}
	}
	catch(error){
		console.log(error);
		return {sucsses:false, message: "هناك مشكلة ما، حاول التحديث وحاول مرة أخرى"}
	}
}

export async function isOpinionAuthor(id:string)
{
	const userData = await cachedDataFromSession();
	const userId = userData? userData.id : null
	const sucsses = userId === id ? true : false;
	return {sucsses:sucsses}
}