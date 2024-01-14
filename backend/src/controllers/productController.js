import { Product } from "../model/productSchema.js";

export const addProduct = async (req, res) => {
  try {
    const path = req.file.path;
    if (!path) return;
    const newProduct = await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      inStock: req.body.inStock,
      image: req.file.filename,
      categoryId: req.body.categoryId,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const showProduct = async (req, res) => {
  try {
    const products = await Product.find().populate("categoryId");
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const products = await Product.findByIdAndDelete(id);
    res.status(204).json({
      success: "ok",
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
