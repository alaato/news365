import Article from "@/app/models/articleModel";
import connect from "@/app/utils/connect";
import { NextResponse } from "next/server";
export async function POST(request) {

    try {
        await connect();
        const body = await request.json()
        const article = new Article(body)
		if(!article)
			return NextResponse.json({message : "لم نتمكن من حفظ المقال، حاول مرة أخرى لاحقاً"},{status: 500});
		if(article.featured)
			Article.setFeaturedArticle(article.id);
        await article.save();
        return NextResponse.json(article,{status: 201})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message : "لم نتمكن من حفظ المقال، حاول مرة أخرى لاحقاً"},{status: 500});
    }
}
