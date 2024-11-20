import express from 'express';
import productImg from '../middlewares/multer';
import ProductController from '../controllers/ProductController';
import { validate } from '../middlewares/validation';
import { createProductSchema, updateProductSchema } from '../validations/productValidations';

const router = express.Router();

router.get("/", ProductController.GetAllProducts);
router.get("/:id", ProductController.GetProductById);
router.put("/:id", validate(updateProductSchema), productImg.single('image'), ProductController.UpdateProduct);
router.post("/", validate(createProductSchema), productImg.single('image'), ProductController.CreateProduct);
router.delete("/:id", ProductController.DeleteProduct);

export default router;