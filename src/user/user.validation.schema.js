const createValidator = require('../helper/create-validator');

const registrationValidationSchema = {
  // this is the body json schema to validate the body request only
  bodySchema: [
    {

      $id: '/schemas/educative.io/users/create/body',

      title: 'Schema',

      type: 'object',

      additionalProperties: false,

      required: ['email', 'password'],

      properties: {
        firstName: {
          type: 'string',
          transform: ['trim'],
          minLength: 1,
          maxLength: 50,
        },

        lastName: {
          type: 'string',
          transform: ['trim'],
          minLength: 1,
          maxLength: 50,
        },

        email: {
          type: 'string',
          format: 'email',
          transform: ['trim', 'toLowerCase'],
        },

        password: {
          type: 'string',
          minLength: 8,
          maxLength: 50,
        },
      },
    },
  ],
};

const loginValidationSchema = {
  // this is the body json schema to validate the body request only
  bodySchema: [
    {

      $id: '/schemas/educative.io/users/login/body',

      title: 'Schema',

      type: 'object',

      additionalProperties: false,

      required: ['email', 'password'],

      properties: {

        email: {
          type: 'string',
          format: 'email',
          transform: ['trim', 'toLowerCase'],
        },

        password: {
          type: 'string',
          minLength: 8,
          maxLength: 50,
        },
      },
    },
  ],
};

const getUsersValidationSchema = {
  // this is the query string json schema to validate the query request only
  querySchema: [{
    $id: '/schemas/educative.io/users/login/body',
    type: 'object',

    properties: {
      page: {
        type: 'number',
        default: 1,
        minimum: 1,
      },

      limit: {
        type: 'number',
        minimum: 1,
        maximum: 100,
        default: 10,
      },

      sortBy: {
        type: 'string',
        default: 'createdAt',
      },

      order: {
        type: 'number',
        default: -1,
        enum: [-1, 1],
      },
    },
  }],
};

module.exports = {
  registrationValidator: createValidator(registrationValidationSchema),
  loginValidator: createValidator(loginValidationSchema),
  getUsersValidator: createValidator(getUsersValidationSchema),
};
