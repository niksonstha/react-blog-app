import express from "express";
const router = express.Router();
import {
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

export default router;
