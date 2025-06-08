import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    price: {type: Number},
    publisher: {type: String},
    title: {type: String, required: true},
    author: authorSchema
}, {versionKey: false});

const book = mongoose.model("book", bookSchema);

export default book;