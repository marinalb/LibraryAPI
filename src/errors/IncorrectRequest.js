import ErrorBase from "./ErrorBase.js"

class IncorrectRequest extends ErrorBase {
    constructor(message = "DATA INCORRECT!!"){
        super(message, 400);
    }
};

export default IncorrectRequest;