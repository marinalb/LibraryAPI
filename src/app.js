import express from 'express';
import connectDB from './config/dbConnect.js';
import routes from "./routes/index.js";
import errorHandler from './middleware/errorHandler.js';
import handler404 from './middleware/handler404.js';

const conection = await connectDB();

conection.on("error", (err) => {
    console.error("FAILED", err);
});

conection.once("open", () => {
    console.log("CONNECTION UP!");
});

const app = express();
routes(app);

app.use(handler404);
app.use(errorHandler);

export default app;

