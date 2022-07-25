const ServiceError = require('./service-error')

module.exports = class ValidationError extends ServiceError {
  constructor (errorList) {
    super('Validation Error', 'VALIDATION_ERROR', 422);
    super.name = "ValidationError";
    this.errors = errorList || [];
  }
};
