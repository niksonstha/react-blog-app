import { Admin } from "../model/adminSchema.js";
import bcrypt from "bcryptjs";
import { setAdmin } from "../services/adminauth.js";
import { User } from "../model/userSchema.js";

export const registerAdmin = async (req, res) => {
  try {
    const registerAdmin = await Admin.create({
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(registerAdmin);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the admin by email
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare provided password with the hashed password in the database
    const isPasswordMatch = await bcrypt.compare(password, admin.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Passwords match - admin is authenticated
    const token = setAdmin(admin.toObject());
    console.log(token);

    res
      .status(200)
      .cookie("aid", token, {
        expires: new Date(Date.now() + 2592000000),
      })
      .json({
        success: true,
        message: `Welcome ${admin.fullname}`,
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const allUsers = await User.find();

    const usersData = allUsers.map((user) => ({
      id: user._id,
      fullname: user.fullname,
      email: user.email,
    }));

    res.status(200).json(usersData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const deletUser = await User.findByIdAndDelete(id);
    res.status(200).json({
      message: `The user with the id ${id} has been deleted`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
