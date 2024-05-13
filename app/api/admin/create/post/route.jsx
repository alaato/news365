import Article from "@/app/models/articleModel";
import Category from "@/app/models/CategoryModel";
import connect from "@/app/utils/connect";
import { NextResponse } from "next/server";
export async function POST(request) {

    try {
        await connect();
        const body = await request.json()
        const article = new Article(body)
        await article.save();
        const category = await Category.findOne({category: body.category})
        category.articles.push(article);
        await category.save();
        return NextResponse.json(article,{status: 201}) 
    } catch (error) {
        console.log(error);
        return NextResponse.error(error);
    }
   
}
