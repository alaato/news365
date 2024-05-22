import Article from "@/app/models/articleModel";
import connect from "@/app/utils/connect";
import { NextResponse } from "next/server";
export async function DELETE(request, { params }) {

    try {
        await connect();
        const id = params.id;
        if(!id)
            return NextResponse.json({message: "هذه المقالة غير موجودة"}, {status: 400});
        const article = await Article.findByIdAndDelete(id);
        if(!article)
            return NextResponse.json({message: "هذه المقالة غير موجودة"}, {status: 400});
        return NextResponse.json({message: "sussces", status:200})
    } catch (error) {
        console.log(error);
            return NextResponse.json({message: "حدث خطأ ما حاول مرة أخرى"}, {status: 400});
    }
}