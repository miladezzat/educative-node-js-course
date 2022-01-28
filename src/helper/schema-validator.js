const Ajv = require('ajv').default;
const _ = require('lodash');
const { config, configureAjv } = require('../../config/ajv.config');

class SchemaValidator {
  constructor(schema) {
    if (_.isNil(schema) || _.isEmpty(schema)) {
      throw new Error('missing or invalid dependencies');
    }
    this.schemas = schema;
    this.ajvValidate = null;
  }

  validate(doc) {
    const validationResult = this._validate(doc);

    if (validationResult) {
      return Promise.resolve(doc);
    }

    const errorObject = new Error('invalid object');
    errorObject.details = this._formatErrors(this.ajvValidate.errors);

    return Promise.reject(errorObject);
  }

  _validate(doc) {
    if (_.isNil(this.ajvValidate)) {
      this._createValidatorInstance();
    }

    return this.ajvValidate(doc);
  }

  _createValidatorInstance() {
    const ajv = new Ajv(config);
    configureAjv(ajv);

    const lastSchema = _.last(this.schemas);
    const schemas = _.dropRight(this.schemas);

    if (!_.isEmpty(schemas)) {
      ajv.addSchema(schemas);
    }

    this.ajvValidate = ajv.compile(lastSchema);
  }

  _formatErrors(errorsArray) {
    return _.map(errorsArray, (anError) => _.omit(anError, 'schemaPath'));
  }
}

module.exports = SchemaValidator;
