import expressAsyncHandler from "express-async-handler";
import cloudinary from "cloudinary";
import { Testimonial } from "../../models/testimonialModel/testimonialModel.js";


//GET TESTIMONIALs
export const getTestimonials = expressAsyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find({});
  res.status(200).json(testimonials);
});


//GET TESTIMONIAL
export const getTestimonialById = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  let testimonial = await Testimonial.findById(id);
  if (!testimonial) {
    return res.status(404).json({ message: "testimonial not found" });
  }
  res.status(200).json(testimonial );
});


//CREATE TESTIMONIAL
export const createTestimonials = expressAsyncHandler(async (req, res) => {
  const { title,description,fullName,position } = req.body;
  const image = await cloudinary.uploader.upload(req.file.path);

  const testimonial = new Testimonial({
    title,
    description,
    fullName,
    position,
    image: image.secure_url,
  });
  await testimonial.save();
  res.status(200).json(testimonial);
});


// UPDATE TESTIMONIAL
export const updateTestimonial = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  let image;
  if (req.file) {
    image = await cloudinary.uploader.upload(req.file.path);
  }
  const existingTestimonial = await Testimonial.findByIdAndUpdate(
    id,
    {
        title: req.body.title,
        description: req.body.description,
        fullName: req.body.fullName,
        position: req.body.position,
      image: image.secure_url,
    },
    { new: true }
  );

  if (!existingTestimonial) {
    return res.status(400).json({ message: "Testimonial not found" });
 }

  res.status(200).json( existingTestimonial);
});


// DELETE TESTIMONIAL
export const deleteTestimonial = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const deleteTestimonial = await Testimonial.findByIdAndDelete(id);
  if (!deleteTestimonial) {
    return res.status(400).json({message : "deleted Testimonial not found"});
  }
  res.status(200).json({message:'Testimonial deleted' });
});
