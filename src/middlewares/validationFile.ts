import { Request, Response, NextFunction } from "express";

export const validateFile = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.file);
    if (!req.file) {
        res.status(400).send({
            status: 400,
            message: "Image is required",
        });
        return;
    }
    next();
};