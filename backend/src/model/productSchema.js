import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for the product."],
      maxLength: [
        30,
        "The name of the product should be less than 30 characters",
      ],
    },
    description: {
      type: String,
      maxLength: 150,
    },
    price: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

export const Product = model("Product", productSchema);
