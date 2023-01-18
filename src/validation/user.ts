import { Request } from 'express';
import Joi from 'joi';

const userSchema = Joi.object().keys({
  login: Joi.string().email().required(),
  password: Joi.string().alphanum().min(3).max(30).required(),
  age: Joi.number().integer().min(4).max(130).required()
});

export const validateUser = (data: Request['body']) => {
  return userSchema.validate(data);
};
