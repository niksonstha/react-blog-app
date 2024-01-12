import { Category } from "../model/categorySchema.js";

export const addCategory = async (req, res) => {
  try {
    const addCategory = await Category.create({
      category: req.body.category,
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
export const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteCategory = await Category.findByIdAndDelete(id);
    res.status(200).json({
      success: "ok",
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
