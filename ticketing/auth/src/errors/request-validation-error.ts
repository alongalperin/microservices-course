import { CustomError } from "./custom-error";
import { ValidationError } from "express-validator";

export class RequestValidationError extends CustomError {
  public statusCode = 400;
  public errors: ValidationError[];

  constructor(errors: ValidationError[]) {
    super("Invalid request parameters");
    this.errors = errors;

    // Only because we are extendig a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return {
        message: err.msg,
        field: err.param,
      };
    });
  }
}
