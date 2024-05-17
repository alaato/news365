import EditPost from "@/app/components/admin/editPost/Editpost";
import Article from "@/app/models/articleModel"
import { notFound } from "next/navigation";
import { authorData } from "@/app/utils/intrfaces";
import { getAuthorData } from "@/app/utils/authinticationUtils";
import customError from "@/app/utils/customError";
import React from "react";
import { Article as ArticleInterface} from "@/app/utils/intrfaces";
const page = async ({ params }: { params: { id: string } }) => {
	const author: authorData = await getAuthorData()
	const article: ArticleInterface = await Article.findById(params.id, {_id:0}).lean();
	if(!article)
		return notFound();
	if(article.author.id !== author.id)
		throw new customError("ليس لديك تصريح للوصول إلى هذه الصفحة", 401)
	return (<EditPost article={article}/>);
};

export default page;
