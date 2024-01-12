import { Category } from "../model/categorySchema.js";

export const addCategory = async (req, res) => {
  try {
    const addCategory = await Category.create({
      name: req.body.name,
    });
    res.status(200).json({
      success: "ok",
      data: addCategory,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getCategory = async (req, res) => {
  try {
    const getCategory = await Category.find();
    res.status(200).json({
      success: "ok",
      data: getCategory,
    });
  } catch (error) {
    console.log(error);
  }
};
