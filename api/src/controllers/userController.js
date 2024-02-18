import hashPassword from "../middleware/hashPassword.js";
import bcrypt from "bcrypt";
import { User } from "../models/userModel/userModel.js";


//GET ALL USERS
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.find({ id });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//GET USER BY ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
        res.status(400).json({ error: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//UPDATE USER
export const updateUser = async (req, res) => {
  try {
    const { error } = User.validateForUpdate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const { id } = req.params;


    if (req.body.hasOwnProperty("password")) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    const updateUser = await User.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidators: true }
    );
    if (!updateUser) {
        res.status(400).json({ error: "User not found" });
    }
    res.status(200).json({ updateUser });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};


//DELETE USER
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
        res.status(400).json({ error: "User not found" });
    }
    res.status(200).json("User deleted");
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
