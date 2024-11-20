import express from 'express';
import CategoryController from '../controllers/CategoryController';

const router = express.Router();

router.get("/", CategoryController.GetAllCategory);
router.get("/:id", CategoryController.GetCategoryById);
router.put("/:id", CategoryController.UpdateCategory);
router.post("/", CategoryController.CreateCategory);
router.delete("/:id", CategoryController.DeleteCategory);

export default router;