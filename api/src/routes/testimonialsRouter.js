import express from "express";
import { upload } from "../middleware/multerMiddleware.js";
import { createTestimonials, deleteTestimonial, getTestimonialById, getTestimonials, updateTestimonial } from "../controllers/testimonialController/testimonialController.js";


const testimonials = express.Router();

testimonials.post("/testimonial",upload.single('image'), createTestimonials);
testimonials.get("/testimonial", getTestimonials);
testimonials.get("/testimonial/:id", getTestimonialById);
testimonials.put("/testimonial/:id",upload.single('image'),updateTestimonial );
testimonials.delete("/testimonial/:id", deleteTestimonial);

export default testimonials;


