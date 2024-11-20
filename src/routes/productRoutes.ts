import express from 'express';
import ProductController from '../controllers/ProductController';

const router = express.Router();

router.get("/", ProductController.GetAllProducts);
router.get("/:id", ProductController.GetProductById);
router.put("/:id", ProductController.UpdateProduct);
router.post("/", ProductController.CreateProduct);
router.delete("/:id", ProductController.DeleteProduct);

export default router;