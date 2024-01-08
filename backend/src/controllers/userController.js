// userController.js
import { User } from "../model/userSchema.js";
import { setUser } from "../services/auth.js";

export const createUser = async (req, res) => {
  try {
    const newUser = await User.create({
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json({
      success: true,
      message: "user created",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const getAllUser = await User.find();
    res.status(200).json(getAllUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const loginUser = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    const token = setUser(loginUser.toObject());

    res
      .status(200)
      .cookie("uid", token)
      .json({
        success: "ok",
        message: `Welcome ${loginUser.email}`,
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const getUserById = await User.findByIdAndUpdate(id, body);
    res.status(201).json(getUserById);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const id = req.params.id;

    const user = await User.findOne({ _id: id });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.password !== currentPassword) {
      return res.status(401).json({ error: "Invalid current password" });
    }

    const changePassword = await User.findByIdAndUpdate(id, {
      password: newPassword,
    });
    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const deletUser = await User.findByIdAndDelete(id);
    res.status(404).json({
      message: `The user with the id ${id} has been deleted`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
