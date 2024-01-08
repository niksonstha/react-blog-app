import express from "express";
const router = express.Router();
import {
  changePassword,
  createUser,
  deleteUser,
  getAllUser,
  loginUser,
  updateUser,
} from "../controllers/userController.js";

router.post("/createUser", createUser);
router.post("/loginUser", loginUser);
router.get("/users", getAllUser);
router.route("/:id").patch(updateUser).delete(deleteUser);
router.patch("/changePassword/:id", changePassword);

export default router;
