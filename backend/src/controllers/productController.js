import { Product } from "../model/productSchema.js";
import { Category } from "../model/categorySchema.js"; // Import the Category model

export const addProduct = async (req, res) => {
  try {
    // Check if the categoryId exists before creating the product
    const category = await Category.findById(req.body.categoryId);

    if (!category) {
      return res.status(400).json({ message: "Invalid categoryId" });
    }

    console.log(req.file);

    const newProduct = await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      inStock: req.body.inStock,
      imageUrl: req.file.path,
      categoryId: req.body.categoryId,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
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
