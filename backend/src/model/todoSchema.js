import { model, Schema } from "mongoose";

const todoSchema = new Schema(
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

export const Todo = model("Todo", todoSchema);
