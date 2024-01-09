import { Admin } from "../model/adminSchema.js";
import bcrypt from "bcryptjs";
import { setAdmin } from "../services/adminauth.js";

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
        httpOnly: true,
      })
      .json({
        success: true,
        message: `Welcome ${admin.fullname}`,
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
