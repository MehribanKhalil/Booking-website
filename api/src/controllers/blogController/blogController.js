import Blogs from "../../models/BlogModel/blogModel.js";
import expressAsyncHandler from "express-async-handler";
import cloudinary from "cloudinary";
import BlogTags from "../../models/BlogModel/blogTags.js";

//GET BLOGS
export const getBlogs = expressAsyncHandler(async (req, res) => {
  const blogs = await Blogs.find({}).populate("tag");
  res.json(blogs);
});

//GET BLOG BY ID
export const getByIdBlog = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const blog = await Blogs.findById(id).populate("tag");
  res.json(blog);
  res.status(500).json({ messsage: error });
});

//CREATE BLOG
export const createBlog = async (req, res) => {
    try {
      const { title, description, name, tagId } = req.body;
      const image = await cloudinary.uploader.upload(req.file.path);
      const newBlogPost = new Blogs({
        image:image.secure_url,
        title,
        description,
        name,
        tag:tagId,
      });
      await newBlogPost.save();     
      await BlogTags.findByIdAndUpdate(tagId, {
        $push: { blogs: newBlogPost._id }, 
      });
      res.status(201).json({ message: 'Blog post created successfully', blogPost: newBlogPost });

    } catch (error) {
      console.error('Error creating blog post:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };