import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { validateUser } from "../utils/userValidator.js";

//USER REGISTER
export const userRegister = async (req, res) => {
  const { error } = validateUser(req.body);
  const { email, firstName, lastName, photo, password } = req.body;

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = await User.findOne({
    email: req.body.email,
  });

  if (user) {
    return res
      .status(400)
      .json({ message: " User already exists. Please sign in" });
  } else {
    try {
      const newUser = new User({
        email,
        firstName,
        lastName,
        photo,
        password,
      });
      await newUser.save();
      res.status(201).json({ newUser });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};


//USER LOGIN
export const userLogin = async (req, res) => {
    
};
