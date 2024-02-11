import express from "express";
import { getUserProfile, updateUserProfile, userLogOut, userLogin, userRegister } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import { updateUser } from "../controllers/userController.js";

const router=express.Router()

router.post('/register',userRegister)
router.post('/login',userLogin)
router.post('/logout',userLogOut)

router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)

export default router