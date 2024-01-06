import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, "Full name is required"],
    },
    username: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "Username is required"],
    },
    password: {
      type: String,
      select: false, // Hide the password field when querying a document.
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
