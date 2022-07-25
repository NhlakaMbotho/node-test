const swagger = require("../swagger/config");
const Validator = require("swagger-model-validator");
const ValidationError = require("../models/validation-error");

const validator = new Validator(swagger);

module.exports = {
  validate(modelName, target) {
    const validationResponse = validator.swagger.validateModel(
      modelName,
      target,
      false,
      true
    );
    if (!validationResponse.valid) {
      throw new ValidationError(validationResponse.GetErrorMessages());
    }
  },
  updateValidator(modelName, target) {
    if (!validator.swagger.components.schemas[modelName]) {
      throw new ValidationError(["Model does not exists"]);
    }

    if (
      validator.swagger.components.schemas.Invoice.required.every(
        (key) => target[key] === undefined || target[key] === null
      )
    ) {
      throw new ValidationError(["Invalid object"]);
    }
  }
};
