// import mongoose from "mongoose";
// import Joi from "joi";
// const { Schema } = mongoose;
// const hotelSchema = new Schema(
//   {
//     title: { type: String },
//     description: { type: String },
//     adultCount: { type: Number },
//     childCount: { type: Number },
//     isAvaibly: {type: Boolean, default:true}, //men eledim
//     facilities: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "HotelFacilities",
//       },
//     ],
//     pricePerNight: { type: Number },
//     starRating: { type: Number, min: 1, max: 5 },
//     imageUrls: [{ type: String }],
//     category: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "HotelCategories",
//       },
//     ],
//     bedroomCount: { type: Number },
//     bedCount: { type: Number },
//     bathroomCount: { type: Number },
//   },
//   {
//     timestamps: true,
//   }
// );

// export const Rooms = mongoose.model("Hotels", hotelSchema);