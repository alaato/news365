import mongoose from "mongoose";

const connect = async () => {
    if (mongoose.connection.readyState == 1) return ;
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('connected db');
    } catch (error) {
        console.log('error connecting')
        throw new Error(error.message)
    }
}
export default connect;
