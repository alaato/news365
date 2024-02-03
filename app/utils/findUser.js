import User from "../models/userModel";
import connect from "./connect";
export async function findUser(id) {
    connect();
    const user = await User.findById(id);
    return user
}