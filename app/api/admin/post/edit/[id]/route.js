import Article from "@/app/models/articleModel";
import connect from "@/app/utils/connect";
import { NextResponse } from "next/server";
export async function POST(request) {

    try {
        await connect();
        const articleBody = await request.json()
        console.log(articleBody);
        const article = await Article.findByIdAndUpdate(articleBody._id, articleBody, {lean:true, returnDocument:'after'})
        return NextResponse.json({article},{status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.error(error);
    }
}
