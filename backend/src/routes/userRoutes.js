import express from "express";
const router = express.Router();
import {
  changePassword,
  createUser,
  loginUser,
  updateUser,
} from "../controllers/userController.js";

router.post("/createUser", createUser);
router.post("/loginUser", loginUser);
router.route("/:id").patch(updateUser);
router.patch("/changePassword/:id", changePassword);

export default router;
