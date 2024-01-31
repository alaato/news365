import connect from "@/app/utils/connect";
import User from "@/app/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import sendEmail from "@/app/utils/mail";
import { render } from '@react-email/render';
import Email from "@/app/components/email";
import Disconnect from "@/app/utils/disconnect";


export async function POST(req)
{
    try {
        connect();
        const body = await req.json();
        if(!body)
            throw new Error
        const {username, email, password} = body
        const isEmail = await User.findOne({email})
        // const isUsername = await User.findOne({username}) 
        if(isEmail)
            return NextResponse.json({message: " يوجد حساب بهذا الايميل "}, {status: 400});
        // if(isUsername)
        //     return NextResponse.json({message: "يوجد حساب بهذاالاسم "}, {status: 400});
        
        bcryptjs.genSalt(10, function(err, salt) {
            bcryptjs.hash(password, salt, async function(err, hashpass) {
                if (err) throw err;
                    const newUser = new User({
                        username: username,
                        password: hashpass,
                        role: 'user',
                        email: email,
                        verifiedToken: await bcryptjs.hash(username, 10),
                    })
                    await newUser.save();
                    const message = `http://localhost:3000/verify/${newUser.id}/${newUser.verifiedToken}`;
                    const emailHtml = render(<Email url={message} username={newUser.username} />,   {pretty: true});
                    sendEmail(newUser.email, "Verify Email", emailHtml)
                    console.log(newUser)

            });
        }).catch(err => {throw err});
        return NextResponse.json({message: " تم انشاء الحساب. الرجاء تفعيل الحساب من البريد الالكتروني "}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "يوجد خطأ ما, الرجاء اعادة المحاولة"}, {status: 500});
    }
}