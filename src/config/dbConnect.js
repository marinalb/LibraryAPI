import mongoose, { mongo } from "mongoose";

async function connectDB() {
    mongoose.connect(process.env.DB_CONNECTION);
    return mongoose.connection;
}

export default connectDB;

