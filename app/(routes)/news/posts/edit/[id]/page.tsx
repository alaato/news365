import EditPost from "@/app/components/admin/editPost/Editpost";
import Article from "@/app/models/articleModel"
import { notFound } from "next/navigation";
import { authorData } from "@/app/utils/intrfaces";
import { getAuthorId } from "@/app/utils/Auth/authinticationUtils";
import customError from "@/app/utils/customError";
import React from "react";
import { Article as ArticleInterface} from "@/app/utils/intrfaces";
const page = async ({ params }: { params: { id: string } }) => {
	const authorId = await getAuthorId()
	const article: ArticleInterface = await Article.findById(params.id).lean({virtuals:true});
	if(!article)
		return notFound();
	article.author = article.author.toString();
	article._id = article._id.toString();
	if(article.author !== authorId)
		throw new customError("ليس لديك تصريح للوصول إلى هذه الصفحة", 401)
	return (<EditPost article={article}/>);
};

export default page;
