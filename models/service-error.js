module.exports = class ServiceError extends Error {
  constructor(message, code, statusCode = 500, innerError = null) {
    super(message);
    super.name = "ServiceError";
    if (innerError && innerError.stack) {
      super.stack = innerError.stack;
    }
    this.techErrorMessage = innerError && innerError.message;
    this.code = code;
    this.statusCode = statusCode;
  }
};
