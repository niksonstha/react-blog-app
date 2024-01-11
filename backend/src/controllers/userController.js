// userController.js
import { User } from "../model/userSchema.js";
import { setUser } from "../services/userAuth.js";
import bcrypt from "bcryptjs";

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

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare provided password with the hashed password in the database
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Passwords match - user is authenticated
    const token = setUser(user.toObject());

    res
      .status(200)
      .cookie("uid", token, {
        expires: new Date(Date.now() + 2592000000),
      })
      .json({
        success: true,
        message: `Welcome ${user.email}`,
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

    const user = await User.findById(id);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare the current password with the hashed password from the database
    const isPasswordMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid current password" });
    }

    // Hash the new password before updating
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update the user's password with the hashed new password
    await User.findByIdAndUpdate(id, { password: hashedPassword });

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
