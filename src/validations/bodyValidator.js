const Joi = require('joi');

const bodySchema = Joi.alternatives().try(
  Joi.object({
    firstName: Joi.string().alphanum().min(3).max(30).required(),
    lastName: Joi.string().alphanum().min(3).max(30).required(),
    nickName: Joi.string().min(3).max(30).trim().required(),
    password: Joi.string().required().min(3).max(30),
    cellPhone: Joi.string().min(9).max(13).required(),
    country: Joi.string(),
    datePeople: Joi.string(),
    address: Joi.string().required(),
    email: Joi.string().email().required()
  })
)

  module.exports = bodySchema;