import express from "express";
import { upload } from "../middleware/multerMiddleware.js";
import { createBlog, getBlogs } from "../controllers/blogController/blogController.js";


const blogs = express.Router();

blogs.post("/blog",upload.single('image'), createBlog);
blogs.get("/blog", getBlogs);
// blogs.put("/blog/:id",upload.single('image'),updateblog );
// blogs.delete("/blog/:id", deleteTestimonial);

export default blogs;


