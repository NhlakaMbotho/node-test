const ServiceError = require("../models/service-error");

module.exports = function (err, req, res, next) {
  const httpStatus = err.statusCode || 500;
  let _error = null;

  if (err instanceof ServiceError) {
    _error = {
      message: err.message,
      techErrorMessage: err.techErrorMessage,
      errors: err.errors,
      name: err.name,
      code: err.code,
      stackTrace: process.env.NODE_ENV !== "production" ? err.stack : undefined
    };
  } else {
    _error = {
      message: err.message || "Internal Server Error",
      name: err.constructor.name || "Error",
      code: "SERVER_ERROR",
      stackTrace: process.env.NODE_ENV !== "production" ? err.stack : undefined
    };
  }

  res.status(httpStatus).send(_error);
};
