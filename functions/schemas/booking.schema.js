const Joi = require('joi');

const bookingSchema = Joi.object().keys({
  id: Joi.string().required(),
  hours: Joi.string()
    .min(5)
    .max(5)
    .required(),
  firstname: Joi.string()
    .min(2)
    .max(30)
    .required(),
  lastname: Joi.string()
    .min(2)
    .max(40)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  tel: Joi.string()
    .regex(/^\d{10}/)
    .required(),
  persons: Joi.number().required(),
  date: Joi.string(),
  timestamp: Joi.number(),
  currentTimestamp: Joi.number(),
  note: Joi.string().max(300),
});

module.exports = bookingSchema;
