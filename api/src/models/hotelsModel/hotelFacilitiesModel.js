import mongoose from "mongoose";

const { Schema } = mongoose;

const hotelFacilitiesSchema = new Schema(
  {
    facilityImage: [{ type: String}],
    hotels:[{type:Schema.Types.ObjectId, ref:'Hotels'}],
    facilityTitle: { type: String}
  },
  { timestamps: true}
);

export const HotelFacilities = mongoose.model("HotelFacilities", hotelFacilitiesSchema);
