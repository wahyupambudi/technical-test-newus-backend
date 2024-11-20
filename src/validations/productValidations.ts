import Joi from "joi";

export const createProductSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    desc: Joi.string().min(3).max(100).required(),
    category_id: Joi.number().integer().positive().required(),
    image: Joi.string().min(3).max(200).required()
});

export const updateProductSchema = Joi.object({
    name: Joi.string().min(3).max(100).optional(),
    desc: Joi.string().min(3).max(100).optional(),
    category_id: Joi.number().integer().positive().optional(),
    image: Joi.string().min(3).max(200).optional()
});
