import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { User } from "../models/userModel/userModel.js";


const protect= asyncHandler(async(req,res,next)=>{
    let token;
    token= req.cookies.access_token

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user =  await  User.findById(decoded.userId).select('-password')
            next()
        } catch (error) {
        throw new Error ('Not authorized , invalid token')
            
        }

    } else{
        res.status(401)
        throw new Error ('Not authorized , no token')
    }
})


const isAdmin = async (req, res, next) => {
    if (req.user && (req.user.role === 'admin' || req.user.role === 'superAdmin')) {
        next();
    } else {
        res.status(403);
        throw new Error('Not authorized, only admin users allowed');
    }
};


export {protect, isAdmin}






