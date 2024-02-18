import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import { User } from "../models/userModel/userModel.js";

//USER REGISTER
export const userRegister = asyncHandler(async (req, res) => {
  const { email,userName, firstName, lastName, password } = req.body;

  const { error } = User().validateUser(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = await User.findOne({
    email: req.body.email,
  });

  if (user) {
    return res.status(400).json({ message: "User already exists. Please sign in" });
  } else {
    const newUser = new User({
      email,
      firstName,
      lastName,
      userName,
      password,
    });
    await newUser.save();
    generateToken(res, newUser);
    res.status(201).json({ newUser });
  }
});

//USER LOGIN
export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (user && (await user.matchedPassword(password))) {
    generateToken(res, user);

    return res.status(201).json({ user });
  } else {
    res.status(400).json({ message: "Invalid email or password" });
  }
});

//USER LOGOUT
export const userLogOut = asyncHandler(async (req, res) => {
  res.cookie("access_token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User log out" });
});

//GET USER
export const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile" });
});

//UPDATE USER
export const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile" });
});
