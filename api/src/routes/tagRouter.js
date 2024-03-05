import express from "express";
import { createBlogTag, getBlogTag } from "../controllers/tagController/tagController.js";

const tags = express.Router();

tags.get("/tag", getBlogTag);
// tags.get("/tag/:id", gettagById);
tags.post("/tag", createBlogTag);
// tags.put("/tag/:id", updatetag);
// tags.delete("/tag/:id", deletetag);

export default tags;
