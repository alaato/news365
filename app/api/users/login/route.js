import connect from "@/app/utils/connect";
import User from "@/app/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import sendEmail from "@/app/utils/mail";
import { render } from '@react-email/render';
import Email from "@/app/components/email";

export async function POST(req)
{
    try {
        connect();
        const body = await req.json();
        const {email, password} = body
        const user = await User.findOne({email});
        if(!user)
            return NextResponse.json({message: "لا يوجد مستخدم بهذا الايميل", status: 400}, {status: 400});
        const match = await bcryptjs.compare(password, user.password)
        if(!match || email === user.email)
        {
            console.log(password)
            return NextResponse.json({message: "البيانات خطأ, الرجاء ادخال بيانات  صحيحة", status: 400}, {status: 400});
        }
        return NextResponse.json({message: "تم تاكيد المستخدم"});
    } catch (error) {
        return NextResponse.json({message: "يوجد خطأ ما, الرجاء اعادة المحاولة"}, {status: 500});

    }

}