import hashPassword from "../middleware/hashPassword.js";
import bcrypt from "bcrypt";
import { User } from "../models/userModel/userModel.js";
import cloudinary from "cloudinary";

export const getCurrentUser = async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      return res
        .status(401)
        .json({ error: "Not authorized, no token or invalid token" });
    }

    const { _id } = req.user;
    const user = await User.findById(_id).populate({
      path: "bookings",
      populate: {
        path: "hotelId",
        model: "Hotels",
      },
    });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// export const userStatus = (req, res) => {
//   try {
//     const currentUser = req.user
//     if (!currentUser) {
//       return res.status(200).json({ isAuthenticated: false })
//     } else {
//       return res.status(200).json({ isAuthenticated: true })
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// }

//GET ALL USERS
export const getUser = async (req, res) => {
  try {
    // const { id } = req.params;
    const user = await User.find({});
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
    const { id } = req.body;

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
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { id, data } = req.body;
    // const { error } = profileSchema.validate(data)
    // if (error) {
    //   return res.status(400).json({ error: error.details[0].message })
    // }

    console.log(id);

    const user = await User.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User successfully updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
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

export const changeAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    console.log(_id);
    console.log(req.file);
    const user = await User.findById(_id);
    if (!user) {
      res.status(400).json({ error: "User not found" });
    }
    const result = await cloudinary.uploader.upload(req.file.path);
    user.avatar = result.secure_url;
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
