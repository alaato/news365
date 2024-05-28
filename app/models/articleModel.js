const mongoose = require('mongoose');
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	title: { type: String, required: true },
	author : {type: Schema.ObjectId, ref : 'User'},
	category: { type: String, required: true },
	content: { type: String, required: true },
	publishedAt: { type: Date, default: Date.now },
	img: { type: String },
	featured: { type: Boolean, default: false },
});
articleSchema.set('toObject', { getters: true });
articleSchema.virtual('thumbnail').get(function () {
	const img = this.img
	const thumbnail = img?.startsWith("res.cloudinary.com") ? img.replace('/upload', '/upload/c_thumb,g_center,w_200') : null;
	return thumbnail;
});

articleSchema.statics.setFeaturedArticle = async function (articleId) {
	// Reset featured flag for all articles
	await this.updateMany({}, { featured: false });
	// Set the specified article as featured
	return this.findByIdAndUpdate(articleId, { featured: true }, { new: true });
};
articleSchema.plugin(mongooseLeanVirtuals);
const Article = mongoose.models.Article || mongoose.model('Article', articleSchema);

module.exports = Article;