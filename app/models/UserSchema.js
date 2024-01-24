import { Schema, model, models } from 'mongoose';
const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    role: [{
        type: String,
        enum: ['admin', 'user', 'author'], 
        default: 'user'
    }],
    verified:
    {
        type: Boolean,
        default: false
    }
})
export default models.Users || model('user', userSchema);