import { Request, Response } from "express";
import { successResponse, errorResponse } from "../helper/responseHandler";
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../services/productService";
import { uploadToCloudinary } from "../utils/uploadCloudinary";

const GetAllProducts = async (_req: Request, res: Response): Promise<void> => {
    try {
        const categories = await getAllProducts();
        res.send(successResponse(200, "OK", categories));
    } catch (error: any) {
        if (error != null && error instanceof Error) {
            res.send(errorResponse(500, error.message, error));
        }
        res.send(errorResponse(500, "Internal Server Error", error));
    }
};

const GetProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const category = await getProductById(id);

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

const CreateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, desc, image, category_id } = req.body;
        // image upload
        if (!req.file) {
            res.status(400).json({ message: 'No Image Uploaded' });
            return;
        }
        const imageUpload = await uploadToCloudinary(req.file.buffer, req.file.mimetype, 'newus');
        const created = await createProduct(name, desc, imageUpload.secure_url, category_id);
        res.send(successResponse(200, "Created Category", created));
    } catch (error: any) {
        if (error != null && error instanceof Error) {
            res.send(errorResponse(500, error.message, error));
        }
        res.send(errorResponse(500, "Internal Server Error", error));
    }
};

const UpdateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, desc, image, category_id } = req.body;

        // image upload
        if (!req.file) {
            res.status(400).json({ message: 'No Image Uploaded' });
            return;
        }
        const imageUpload = await uploadToCloudinary(req.file.buffer, req.file.mimetype, 'newus');
        const updated = await updateProduct(id, name, desc, imageUpload.secure_url, category_id);

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

const DeleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const category = await deleteProduct(id);

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

export default { GetAllProducts, CreateProduct, UpdateProduct, GetProductById, DeleteProduct };