const Joi = require('joi');
const sizesSchema = require('./sizes.schema');

const sectionSchema = Joi.object().keys({
  id: Joi.string().required(),
  name: Joi.string().required(),
  component: Joi.string()
    .equal('section')
    .required(),
  sizes: Joi.object(sizesSchema).required(),
  children: Joi.array().exist(),
});

module.exports = sectionSchema;
