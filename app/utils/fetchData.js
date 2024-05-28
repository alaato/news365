import connect from "@/app/utils/connect";
import Category from "@/app/models/CategoryModel";
import Article from "@/app/models/articleModel";
import Opinion from "@/app/models/opinionModel"
import User from "@/app/models/userModel"

export async function getSubCategories() {
	try {
		await connect();
		const allCategories = await Category.find({}, { category: 1, _id: 0 }).lean()
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
		const categories = await Category.find({}, { category: 1, _id: 0 })
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
		const foundCategory = await Category.findOne({ category: category });
		return foundCategory;
	} catch (error) {
		console.error("database error : ", error);
		throw new Error(error);
	}
}
export async function GetArticlesCategory(category, page) {
	try {
		const skip = page == 0 ? 0 : (page - 1) * 10
		await connect();
		const allArticles = await Article.find({ category: category }).limit(10).skip(skip).lean({virtuals:true}).sort({ publishedAt: -1 });
		if (!allArticles)
			return;
		// const allArticles = newCategory.articles.reverse();
		return allArticles;
	} catch (error) {
		console.error("database error : ", error);
		throw new Error(error);
	}
}
export async function fetchLatestArticles(categories) {
	try {
		await connect();
		const latestArticles = await Article.find({ featured: false }).limit(4).sort({ publishedAt: -1 })
		return latestArticles;
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
		return latest;
	} catch (err) {
		console.error(err);
		throw new Error(err.message);
	}
}

export async function fetchAllOpinions() {
	const allOpinions = await Opinion.find({}).limit(15).populate("author", "Avatar username").lean()
	if (!allOpinions)
		return null;
	return allOpinions;
}