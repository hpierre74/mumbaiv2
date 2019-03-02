const Joi = require('joi');

const validateSchema = (data, schema) =>
  Joi.validate(data, schema, (err, value) => {
    if (err) {
      throw new Error(err);
    }

    return value;
  });

module.exports = validateSchema;
