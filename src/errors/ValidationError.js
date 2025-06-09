import IncorrectRequest from "./IncorrectRequest.js";

class ValidationError extends IncorrectRequest {
    constructor(error) {
        const erroMessage = Object.values(error.errors)
        .map(error => error.message)
        .join("; ");
        super(`ERROR -> ${erroMessage}`);
    }
};

export default ValidationError;