import express from 'express';
import categoryRouter from "./categoryRoutes";
import productRouter from "./productRoutes";

const router = express.Router();

router.use("/api/category", categoryRouter);
router.use("/api/product", productRouter);

export default router;