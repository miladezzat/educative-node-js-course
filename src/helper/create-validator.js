const _ = require('lodash');
const SchemaValidator = require('./schema-validator');

/**
 *
 * @param {Object} schemas
 * @param {Object} schemas.bodySchema
 * @param {Object} schemas.querySchema
 * @param {Object} schemas.paramsSchema
 * @description this function for create ajv validators
 */

const createValidators = (schemas = {}) => {
  const { bodySchema = null, querySchema = null, paramsSchema = null } = schemas;

  let bodyValidator = null;
  let queryValidator = null;
  let paramsValidator = null;

  if (!_.isNil(bodySchema)) {
    bodyValidator = new SchemaValidator(bodySchema);
  }

  if (!_.isNil(querySchema)) {
    queryValidator = new SchemaValidator(querySchema);
  }

  if (!_.isNil(paramsSchema)) {
    paramsValidator = new SchemaValidator(paramsSchema);
  }

  return {
    bodyValidator,
    queryValidator,
    paramsValidator,
  };
};

module.exports = createValidators;
