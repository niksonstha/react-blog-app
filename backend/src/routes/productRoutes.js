import express from "express";
import { addProduct, showProduct } from "../controllers/productController.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.post("/addProduct", upload.single("image"), addProduct);
router.get("/showProduct", showProduct);

export default router;
