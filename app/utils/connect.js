import mongoose from "mongoose";

const connect = async () => {
    if (mongoose.connection.readyState == 1) return ;
    try {
        await mongoose.connect("mongodb+srv://news:Gz6UKzlkQx9Aviof@cluster0.cbzfmvt.mongodb.net/news?retryWrites=true&w=majority");
        console.log('connected db');
    } catch (error) {
        console.log('error connecting')
        throw new Error(error.message)
    }
}
export default connect;
