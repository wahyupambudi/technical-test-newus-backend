import express from 'express';
import categoryRouter from "./categoryRoutes";
import productRouter from "./productRoutes";
import palindromeRouter from "./palindromeRoutes";
import catKittyRouter from "./catKittyRoutes";


const router = express.Router();

router.use("/api/category", categoryRouter);
router.use("/api/product", productRouter);
router.use("/palindrome", palindromeRouter);
router.use("/catkitty", catKittyRouter);
export default router;