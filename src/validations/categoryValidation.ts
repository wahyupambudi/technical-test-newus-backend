import Joi from "joi";

export const createCategorySchema = Joi.object({
    name: Joi.string().valid('indoor', 'outdoor').required()
});

export const updateCategorySchema = Joi.object({
    name: Joi.string().valid('indoor', 'outdoor').required()
});
