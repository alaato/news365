const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    role: [{
        type: String,
        default: 'user',
        enum: ['admin', 'user', 'author'], 
    }],
    verified:
    {
        type: Boolean,
        default: false
    },
    password:{
        type: String,
        required: true,
    },
    forgotPassword: String,
    forgotPasswordexpires: Date,
    verifiedToken: String,
    verifiedTokenExpires: {
        type: Date,
        default: Date.now() + 7200000 
    },

})
const User = mongoose.models.User || mongoose.model('User', userSchema);
module.exports = User;
