import connect from "@/app/utils/connect";
import Category from "@/app/models/CategoryModel";
import Article from "@/app/models/articleModel";

export async function getCategories() {
	try {
		await connect();
		const allCategories = await Category.find({})
			.sort({ publishedAt: -1 })
			.limit(4);
		return allCategories;
	} catch (error) {
		console.error("database error : ", error);
		throw new Error(error);
	}
}
export async function getCategoriesNames() {
	try {
		await connect();
		const categories = await Category.find({},{category: 1,  _id: 0 })
			.sort({ publishedAt: -1 })
		const categoriesNames = categories.map(category => category.category)
		return categoriesNames;

	} catch (error) {
		console.error("database error : ", error);
		throw new Error(error);
	}
}
export async function getCategory(category) {
	try {
		await connect();
		console.log("Loading....");
		const foundCategory = await Category.findOne({ category: category });
		console.log(foundCategory);
		return foundCategory;
	} catch (error) {
		console.error("database error : ", error);
		throw new Error(error);
	}
}
export async function GetArticlesCategory(category) {
	try {
		await connect();
		const newcategory = await Category.findOne({ category: category })
			.sort({ publishedAt: -1 })
			.populate("articles");
		const allArticles = newcategory.articles;
		return allArticles;
	} catch (error) {
		console.error("database error : ", error);
		throw new Error(error);
	}
}

export async function fetchArticles(categories) {
	try {
		await connect();
		const allArticles = [];
		for (let category of categories) {
			const article = await Article.findOne({ category: category.category })
				.sort({ publishedAt: -1 })
				.limit(1);
			allArticles.push(article);
		}
		return allArticles;
	} catch (error) {
		console.error("database error : ", error);
		throw new Error(error);
	}
}

export async function fetchFeatured() {
	await connect();
	const featured = await Article.findOne({ featured: true });
	if (featured) return featured;
	else if (featured === null) {
		const latest = await Article.findOne({}).sort({ publishedAt: -1 });
		return latest;
	}
}

export async function fetchLatestCategory(category) {
	await connect();
	try {
		const latest = await Article.findOne({ category }).sort({
			publishedAt: -1,
		});
		console.log(latest);
		return latest;
	} catch (err) {
		console.error(err);
		throw new Error(err.message);
	}
}
