const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { 
    id: { type: String, required: true},
    username : {type: String, required: true},
   },
  category: { type: String, required: true }, 
  content: { type: String, required: true },
  publishedAt: { type: Date, default: Date.now },
  img: { type: String},
  featured: { type: Boolean, default: false },
});
articleSchema.statics.setFeaturedArticle = async function (articleId) {
  // Reset featured flag for all articles
  await this.updateMany({}, { featured: false });
  // Set the specified article as featured
  return this.findByIdAndUpdate(articleId, { featured: true }, { new: true });
};

const Article = mongoose.models.Article || mongoose.model('Article', articleSchema);

module.exports = Article;