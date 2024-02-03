import connect from "@/app/utils/connect";
import User from "@/app/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST(req)
{
    try {
        connect();
        const body = await req.json();
        const {email, password} = body
        const user = await User.findOne({email});
        if(!user)
            return NextResponse.json({message: "لا يوجد مستخدم بهذا الايميل"}, {status: 400});
        const match = await bcryptjs.compare(password, user.password)
        if(!match)
            return NextResponse.json({message: "البيانات خطأ, الرجاء ادخال بيانات  صحيحة"}, {status: 400});
        if(!user.verified)
            return NextResponse.json({message: "الرجاء تفعيل الحساب"}, {status: 400});

        const tokenData = {
            username : user.username,
            email : user.email,
            verified : user.verified
        }
        const jwtToken = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {expiresIn:"3 days"})
        const response =  NextResponse.json({message: "تم تاكيد المستخدم"}, {status: 200});
        response.cookies.set('jwtToken', jwtToken, {httpOnly: true, secure: true})
        
        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "يوجد خطأ ما, الرجاء اعادة المحاولة"}, {status: 500});
    }
}