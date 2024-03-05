import mongoose from "mongoose";
const { Schema } = mongoose;

const testimonialSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    fullName: {
      type: String,
      required: [true, "Please provide a full name!"],
    },
    position: {
      type: String,
      required: [true, "Please provide a position!"],
    },
  },
  { timestamps: true }
);

export const Testimonial = mongoose.model("Testimonial", testimonialSchema);
