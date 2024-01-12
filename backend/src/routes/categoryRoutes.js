import express from "express";
import {
  addCategory,
  deleteCategory,
  getCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/addCategory", addCategory);
router.get("/getCategory", getCategory);
router.delete("/deleteCategory/:id", deleteCategory);

export default router;
