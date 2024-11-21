import express from 'express';
import CatKittyController from '../controllers/CatKittyController';
const router = express.Router();

router.get("/add-rule", CatKittyController.addRules);
router.get("/:n", CatKittyController.catKitty);


export default router;