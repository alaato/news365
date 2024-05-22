import mongoose from "mongoose";
import connect from "./connect.mjs"
import Article from "../models/articleModel.js"
await connect()
const indexes = await Article.listIndexes();
console.log(indexes);
mongoose.connection.close();

