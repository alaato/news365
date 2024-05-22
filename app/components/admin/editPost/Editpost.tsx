import React from "react";
import styles from "@/app/styles/subscribe.module.css";
import { getCategoriesNames } from "@/app/utils/fetchData";
import EditPostForm from "./EditPostFrom";
const EditPost = async ({article}) => {
	const categories = await getCategoriesNames();
    console.log(article)
	return (
		<section className={styles.containerForm}>
			<h1 className="header">تحرير المقال</h1>
            <EditPostForm article={article} categories={categories}></EditPostForm>
		</section>
	);
};

export default EditPost;