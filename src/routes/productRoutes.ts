import express from 'express';
import productImg from '../middlewares/multer';
import ProductController from '../controllers/ProductController';

const router = express.Router();

router.get("/", ProductController.GetAllProducts);
router.get("/:id", ProductController.GetProductById);
router.put("/:id", productImg.single('image'), ProductController.UpdateProduct);
router.post("/", productImg.single('image'), ProductController.CreateProduct);
router.delete("/:id", ProductController.DeleteProduct);

export default router;