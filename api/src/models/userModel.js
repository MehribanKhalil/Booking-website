import mongoose from "mongoose";
import hashPassword from "../middleware/hashPassword.js";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      require: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
    },
    firstName: {
      type: String,
      require: [true, "Please tell us your name!"],
      minlength: 3,
      maxlength: 30,
    },
    lastName: {
      type: String,
      require: [true, "Please tell us your last name!"],
      minlength: 3,
      maxlength: 30,
    },
    photo: { type: String },
    password: {
      type: String,
      require: [true, "Please provide a password!"],
      minlength: 3,
    },
    passwordConfirm: {
      type: String,
      require: [true, "Please confirm your password!"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save",hashPassword)

export const User = mongoose.model("User", userSchema);
