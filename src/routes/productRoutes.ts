import express from 'express';
import productImg from '../middlewares/multer';
import ProductController from '../controllers/ProductController';
import { validate } from '../middlewares/validation';
import { createProductSchema, updateProductSchema } from '../validations/productValidations';

const router = express.Router();

router.get("/", ProductController.GetAllProducts);
router.get("/:id", ProductController.GetProductById);
router.put("/:id", productImg.single('image'), validate(updateProductSchema), ProductController.UpdateProduct);
router.post("/", productImg.single('image'), validate(createProductSchema), ProductController.CreateProduct);
router.delete("/:id", ProductController.DeleteProduct);


// swagger
router.put("/edit/:id", productImg.single('image'), validate(updateProductSchema), ProductController.UpdateProduct);
router.post("/add", productImg.single('image'), validate(createProductSchema), ProductController.CreateProduct);
router.delete("/delete/:id", ProductController.DeleteProduct);

export default router;