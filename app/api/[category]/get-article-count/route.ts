import Article from "@/app/models/articleModel";
import { NextResponse } from "next/server";

export async function GET(request: Request,
	{ params }: { params: { category: string } }) {
	try {
		console.log(params)
		const articleCount = await Article.countDocuments({ category: params.category })
		return NextResponse.json({ articleCount: articleCount }, { status: 200 })

	} catch (error) {
		console.log(error)
	}
}