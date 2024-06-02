const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');

const opinionSchema = new Schema({
    title: {type: String, required: true,},
	content: {type: String, required: true,},
	author : {type: Schema.ObjectId, ref : 'User'},

})
opinionSchema.plugin(mongooseLeanVirtuals);

const Opinion = mongoose.models.Opinion || mongoose.model('Opinion', opinionSchema);

module.exports = Opinion;