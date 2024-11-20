import { Request, Response } from "express";
import { successResponse, errorResponse } from "../helper/responseHandler";
import Category from "../db/models/Category";
import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from "../services/categoryService";

const GetAllCategory = async (_req: Request, res: Response): Promise<void> => {
    try {
        const categories = await getAllCategories();
        res.send(successResponse(200, "OK", categories));
    } catch (error: any) {
        if (error != null && error instanceof Error) {
            res.send(errorResponse(500, error.message, error));
        }
        res.send(errorResponse(500, "Internal Server Error", error));
    }
};

const GetCategoryById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const category = await getCategoryById(id);

        if (!category) {
            res.send(successResponse(404, "Data Not Found", null));
            return;
        }
        res.send(successResponse(200, "OK", category));

    } catch (error: any) {
        if (error != null && error instanceof Error) {
            res.send(errorResponse(500, error.message, error));
        }
        res.send(errorResponse(500, "Internal Server Error", error));
    }
};

const CreateCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.body;
        const created = await createCategory(name);
        res.send(successResponse(200, "Created Category", created));
    } catch (error: any) {
        if (error != null && error instanceof Error) {
            res.send(errorResponse(500, error.message, error));
        }
        res.send(errorResponse(500, "Internal Server Error", error));
    }
};

const UpdateCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updated = await updateCategory(id, name);

        if (!updated) {
            res.send(successResponse(404, "Data Not Found", null));
            return;
        }
        res.send(successResponse(200, "Updated Category", updated));
    } catch (error: any) {
        if (error != null && error instanceof Error) {
            res.send(errorResponse(500, error.message, error));
        }
        res.send(errorResponse(500, "Internal Server Error", error));
    }
};

const DeleteCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const category = await deleteCategory(id);

        if (!category) {
            res.send(successResponse(404, "Data Not Found", null));
        } else {
            res.send(successResponse(200, "OK", category));
        }
    } catch (error: any) {
        if (error != null && error instanceof Error) {
            res.send(errorResponse(500, error.message, error));
        }
        res.send(errorResponse(500, "Internal Server Error", error));
    }
};

export default { GetAllCategory, CreateCategory, UpdateCategory, GetCategoryById, DeleteCategory };