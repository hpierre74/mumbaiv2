const Joi = require('joi');
const sizesSchema = require('./sizes.schema');

const articleSchema = Joi.object().keys({
  justify: Joi.string()
    .allow(['stretch', 'center'])
    .optional(),
  alignContent: Joi.string()
    .allow(['stretch', 'center'])
    .optional(),
  alignItems: Joi.string()
    .allow(['stretch', 'center'])
    .optional(),
  container: Joi.bool().optional(),
  id: Joi.string().required(),
  name: Joi.string().required(),
  component: Joi.string().required(),
  sizes: Joi.object(sizesSchema).required(),
  data: Joi.array().exist(),
});

module.exports = articleSchema;
