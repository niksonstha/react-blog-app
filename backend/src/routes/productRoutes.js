import express from "express";
import { addProduct, showProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/addProduct", addProduct);
router.get("/showProduct", showProduct);

export default router;
