const addFormats = require('ajv-formats');
const addKeywords = require('ajv-keywords');
const addCustomErrorMessage = require('ajv-errors');

const config = {
  // To return all catch errors
  allErrors: true,
  // Use defaults provided in the schema if the field is not provided
  useDefaults: true,
  $data: true,
  // To remove any fields that are passed in by the user that are not in the schema
  removeAdditional: 'all',
  // All user inputs are strings by default, coercion is used to cast all fields to their appropriate type
  // Array value is used to coerce scalar values to single element in an array
  coerceTypes: 'array',
};

/**
 * @param {Ajv} ajv - the ajv instance
 */
const configureAjv = (ajv) => {
  addKeywords(ajv);
  addFormats(ajv);
  addCustomErrorMessage(ajv);

  //= ================================== Custom keywords ======================//
  // Add custom keyword validator which accepts a function to validate the provided data
  ajv.addKeyword({
    keyword: 'validator',
    errors: true,
    modifying: true,
    compile: ([validator, customErrorMessage]) => function validate(data) {
      const valid = validator(data);
      if (!valid) {
        validate.errors = [{
          keyword: 'validate',
          message: customErrorMessage,
          params: { keyword: 'validate' },
        }];
      }
      return valid;
    },
  });
};

module.exports = {
  configureAjv,
  config,
};
