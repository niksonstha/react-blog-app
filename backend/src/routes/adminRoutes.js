import express from "express";
import {
  getAllUser,
  loginAdmin,
  registerAdmin,
} from "../controllers/adminController.js";
const router = express.Router();

router.post("/registerAdmin", registerAdmin);
router.post("/loginAdmin", loginAdmin);
router.get("/getAllUsers", getAllUser);

export default router;
