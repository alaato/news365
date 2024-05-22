import mongoose from "mongoose";

const Disconnect = async () => {
    if (mongoose.connection.readyState == 0) return ;
    try {
        await mongoose.connection.close();
        console.log('closed DB');
    } catch (error) {
        console.log('error connecting')
        throw new Error(error.message)
    }
}
export default Disconnect;
