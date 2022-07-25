const swagger = require('../swagger/config')
const Validator = require('swagger-model-validator');
const ValidationError = require('../models/validation-error');

validator = new Validator(swagger)

module.exports = {
  validate (modelName, target) {
    const validationResponse = swagger.validateModel(modelName, target, false, true)
    if (!validationResponse.valid) {
      throw new ValidationError(validationResponse.GetErrorMessages());
    }
  },
  updateValidator (modelName, target) {
    if (!swagger.components.schemas[modelName]) {
      throw new ValidationError(['Model does not exists']);
    }

    if (swagger.components.schemas.Invoice.required.every(key => target[key] === undefined)) {
      throw new ValidationError(['Invalid object'])
    }
  }
}
