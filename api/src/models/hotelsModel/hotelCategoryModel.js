import mongoose from "mongoose";

const { Schema } = mongoose;

const hotelCategorySchema = new Schema(
  {
    categoryName: { type: String},    
    hotels:[{type:Schema.Types.ObjectId, ref:'Hotels'}],
    categoryImage: { type: String}
  },
  { timestamps: true,}
);

export const HotelCategories = mongoose.model("HotelCategories", hotelCategorySchema);
