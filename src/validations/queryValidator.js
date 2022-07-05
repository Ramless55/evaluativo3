const Joi = require('joi');

const schema = Joi.object({
    firstName: Joi.string().alphanum().min(3).max(30),
    lastName: Joi.string().alphanum().min(3).max(30),
    nickName: Joi.string().min(3).max(30).trim(),
  })

  module.exports = schema;