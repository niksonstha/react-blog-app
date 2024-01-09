import { Admin } from "../model/adminSchema.js";

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
