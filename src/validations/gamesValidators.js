const Joi = require('joi');

const bodyValidator = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    developer: Joi.string().alphanum().min(3).max(30).required(),
    gender: Joi.string().min(3).max(50).required(),
    gameModes: Joi.string().min(3).max(100).required(),
    category: Joi.string().min(3).max(50).required(),
    platforms: Joi.string().min(3).max(100).required(),
    release: Joi.string().min(3).max(20).required(),
});

const queryValidator = Joi.object({
    name: Joi.string().min(3).max(50),
    category: Joi.string().min(3).max(50),
    platforms: Joi.string().min(3).max(100).trim(),
    gender: Joi.string().min(3).max(50).trim()
  })

const paramsValidator = Joi.object({
    id: Joi.string().alphanum().length(24).required()
  })

module.exports = { bodyValidator, queryValidator, paramsValidator}