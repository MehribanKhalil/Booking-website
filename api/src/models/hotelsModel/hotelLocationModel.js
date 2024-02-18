import mongoose from "mongoose";

const { Schema } = mongoose;

const hotelLocationSchema = new Schema(
  {
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  { timestamps: true,}
);

export const HotelLocation = mongoose.model("HotelLocation", hotelLocationSchema);
