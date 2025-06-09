import mongoose from "mongoose";
import ErrorBase from "../errors/ErrorBase.js";
import IncorrectRequest from "../errors/IncorrectRequest.js"
import ValidationError from "../errors/ValidationError.js";

function errorHandler(error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        res.status(400).send({ message: ` -> SOMETHING INCORRECT!` });
        new IncorrectRequest().sendResponse(res);
    } else if (error instanceof mongoose.Error.ValidationError) {
       new ValidationError(error).sendResponse(res);
    } else {
        new ErrorBase().sendResponse(res);
    }
};

export default errorHandler;