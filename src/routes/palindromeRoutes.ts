import express from 'express';
import Palindrome from '../controllers/PalindromeController';
const router = express.Router();

router.get("/:num", Palindrome);


export default router;