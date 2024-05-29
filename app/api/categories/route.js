import connect from "@/app/utils/connect";
import Category from "@/app/models/categoryModel";
export async function GET() {
    try {
        await connect();
        const allCategory = await Category.find({})
        return Response.json( allCategory);
        } catch (error) {
            console.error('database error : ',error);
            throw new Error(error);
        }
  }