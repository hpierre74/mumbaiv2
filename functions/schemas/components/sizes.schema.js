const Joi = require('joi');
const sizesSchema = Joi.object().keys({
  xs: Joi.number()
    .max(12)
    .min(0)
    .required(),
  sm: Joi.number()
    .max(12)
    .min(0)
    .required(),
  md: Joi.number()
    .max(12)
    .min(0)
    .required(),
  lg: Joi.number()
    .max(12)
    .min(0)
    .required(),
});

module.exports = sizesSchema;
