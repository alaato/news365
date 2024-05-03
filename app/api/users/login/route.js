import connect from "@/app/utils/connect";
import User from "@/app/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import { makeToken } from "../../../utils/tokenUtils";

export async function POST(req)
{
    try {
        connect();
        const body = await req.json();
        const {email, password} = body
        const user = await User.findOne({email});
        const match = await bcryptjs.compare(password, user.password)
        if(!user)
            return NextResponse.json({message: "لا يوجد مستخدم بهذا الايميل"}, {status: 400});
        if(!match)
            return NextResponse.json({message: "البيانات خطأ, الرجاء ادخال بيانات  صحيحة"}, {status: 400});
        if(!user.verified)
            return NextResponse.json({message: "الرجاء تفعيل الحساب"}, {status: 400});

        const tokenData = {
            id: user.id,
            username : user.username,
            verified : user.verified,
            role : user.role,
        }
        const threeDay = Date.now() + 7 * 24 * 60 * 60 * 1000
        const jwtToken = await makeToken(tokenData)
        const response =  NextResponse.json({message: "تم تاكيد المستخدم"}, {status: 200});
        response.cookies.set('session', jwtToken, {httpOnly: true, secure: true, expires: threeDay,
            sameSite: "lax",
            path: "/",})
        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "يوجد خطأ ما, الرجاء اعادة المحاولة"}, {status: 500});
    }
}