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
      image: req.file.path,
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
