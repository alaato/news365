import Article from "@/app/models/articleModel";
import connect from "@/app/utils/connect";
import { revalidatePath } from "next/cache";
import { NextResponse, NextRequest} from "next/server";
export async function POST(request: NextRequest) {

    try {
        await connect();
        const articleBody = await request.json()
        const article = await Article.findByIdAndUpdate(articleBody._id, articleBody, {lean:true, returnDocument:'after'})
		if(!article)
			return NextResponse.json({message:"لا يمكن تحرير مقالة غير موجودة"},{status: 200})
		revalidatePath("/(routes)/news/[category]", "page")
        return NextResponse.json({message:"تم حفظه بنجاح"},{status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"حدث خطأ غير معروف، حاول مرة أخرى لاحقًا"},{status: 200})
    }
}
