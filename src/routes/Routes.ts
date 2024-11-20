import express from 'express';
import CategoryController from '../controllers/CategoryController';

const router = express.Router();

router.get("/api/category", CategoryController.GetAllCategory);
router.get("/api/category/:id", CategoryController.GetCategoryById);
router.put("/api/category/:id", CategoryController.UpdateCategory);
router.post("/api/category", CategoryController.CreateCategory);
router.delete("/api/category/:id", CategoryController.DeleteCategory);

export default router;