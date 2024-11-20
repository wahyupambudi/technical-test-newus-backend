import Joi from "joi";

export const createProductSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    desc: Joi.string().min(3).max(100).required(),
    category_id: Joi.number().integer().positive().required(),
});

export const updateProductSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    desc: Joi.string().min(3).max(100).required(),
    category_id: Joi.number().integer().positive().required(),
});
