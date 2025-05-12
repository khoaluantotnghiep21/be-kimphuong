export class GenericException {
    message: string;
    stackTrace: string | number;
    errorCode: string| number;
    constructor(
        message: string,
        stack: string,
        errorCode: string| number
    ) {
        this.message = message;
        this.stackTrace = stack;
        this.errorCode = errorCode;
    }
}
