const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    category: {type: String, required: true,},
    articles : [{type: Schema.ObjectId, ref : 'Article'}]
})

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

module.exports = Category;