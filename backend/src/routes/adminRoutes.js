import express from "express";
import {
  deleteUser,
  getAllUser,
  loginAdmin,
  registerAdmin,
} from "../controllers/adminController.js";
const router = express.Router();

router.post("/registerAdmin", registerAdmin);
router.post("/loginAdmin", loginAdmin);
router.get("/getAllUsers", getAllUser);
router.route("/deleteUser/:id").delete(deleteUser);

export default router;
