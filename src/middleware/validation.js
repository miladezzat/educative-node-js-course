const _ = require('lodash');
const { Errors: { BadRequestError } } = require('error-handler-e2');

const validation = (validators = {}) => async (req, res, next) => {
  try {
    const { bodyValidator, queryValidator, paramsValidator } = validators;

    if (!_.isNil(bodyValidator)) {
      const body = await bodyValidator.validate(req.body);
      req.body = body;
    }

    if (!_.isNil(queryValidator)) {
      const query = await queryValidator.validate(req.query);
      req.query = query;
    }

    if (!_.isNil(paramsValidator)) {
      const params = await paramsValidator.validate(req.params);
      req.params = params;
    }

    next();
  } catch (error) {
    throw new BadRequestError('Data Validation Error', { error });
  }
};

module.exports = validation;
