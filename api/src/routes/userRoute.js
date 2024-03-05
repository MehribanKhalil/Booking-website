import express from "express";
import { upload } from "../middleware/multerMiddleware.js";

import {
  changeAvatar,
  deleteUser,
  getCurrentUser,
  getUser,
  getUserById,
  updateProfile,
  updateUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import { changePassword } from "../controllers/authController.js";

const myUsers = express.Router();

myUsers.get("/user", getUser);
myUsers.get("/me", protect, getCurrentUser);
myUsers.put("/changeAvatar", protect, upload.single("avatar"), changeAvatar);
myUsers.get("/user/:id", getUserById);
myUsers.put("/user/:id", updateUser);
myUsers.delete("/user/:id", deleteUser);
myUsers.put('/change-password',protect, changePassword)
myUsers.put('/update-profile', updateProfile)



export default myUsers;
