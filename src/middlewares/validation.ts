import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export const validate = (schema: ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const validationErrors = error.details.map((err) => err.message);
            res.status(400).json({
                status: 400,
                message: "Validation Error From Joi",
                errors: validationErrors,
            });
            return; 
        }
        next();
    };
};
