const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');

const categorySchema = new Schema({
    category: {type: String, required: true,},
})
categorySchema.plugin(mongooseLeanVirtuals);

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

module.exports = Category;