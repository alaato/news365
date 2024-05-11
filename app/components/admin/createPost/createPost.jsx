import React from "react";
import styles from "@/app/styles/subscribe.module.css";
import CreatePostForm from "@/app/components/admin/createPost/createPostForm";
import { getCategoriesNames } from "@/app/utils/fetchData";
const CreatePost = async ({author}) => {
	// const categories = await getCategoriesNames();
	const categories = ["تحليلات","مصورة", "محلي", "دولي"];
	return (
		<section className={styles.containerForm}>
			<h1 className="header">لوحة المسؤول</h1>
			<CreatePostForm categories={categories} author={author} />
		</section>
	);
};

export default CreatePost;
