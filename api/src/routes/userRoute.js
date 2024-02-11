import express from "express";
import { deleteUser, getUser, getUserById, updateUser } from "../controllers/userController.js";

const myUsers=express.Router()

myUsers.get('/user',getUser)
myUsers.get('/user/:id',getUserById)
myUsers.put('/user/:id',updateUser)
myUsers.delete('/user/:id',deleteUser)

export default myUsers