import { model, Schema } from "mongoose";

const blogSchema = new Schema(
  {
    todo: {
      type: String,
      required: [true, "task is required"],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Blog = model("Blog", blogSchema);
