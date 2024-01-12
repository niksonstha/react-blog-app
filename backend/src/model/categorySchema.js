import { model, Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for the product."],
      maxLength: [
        30,
        "The name of the product should be less than 30 characters",
      ],
    },
  },
  { timestamps: true }
);

export const Category = model("Category", categorySchema);
