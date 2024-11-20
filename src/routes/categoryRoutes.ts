import express from 'express';
import CategoryController from '../controllers/CategoryController';
import { validate } from '../middlewares/validation';
import { createCategorySchema, updateCategorySchema } from '../validations/categoryValidation';
const router = express.Router();

router.get("/", CategoryController.GetAllCategory);
router.get("/:id", CategoryController.GetCategoryById);
router.put("/:id", validate(updateCategorySchema), CategoryController.UpdateCategory);
router.post("/", validate(createCategorySchema), CategoryController.CreateCategory);
router.delete("/:id", CategoryController.DeleteCategory);

export default router;