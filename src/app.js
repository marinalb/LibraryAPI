import express from 'express';
import connectDB from './config/dbConnect.js';
import routes from "./routes/index.js";

const conection = await connectDB();

conection.on("error", (err) => {
    console.error("FAILED", err);
});

conection.once("open", () => {
    console.log("CONNECTION UP!");
});

const app = express();
routes(app);

export default app;

