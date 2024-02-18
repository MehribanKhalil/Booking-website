import mongoose from "mongoose";
const { Schema } = mongoose;
const hotelSchema = new Schema(
  {
    title: { type: String },
    city: { type: String },
    country: { type: String },
    description: { type: String },
    about: { type: String },
    iframeCode: { type: String },
    childCount: { type: Number },
    adultCount: { type: Number },
    pricePerNight: { type: Number },
    bedroomCount: { type: Number },
    bedCount: { type: Number },
    bathroomCount: { type: Number },
    size: { type: Number },
    starRating: { type: Number, min: 1, max: 5 },
    mainImage: { type: String },
    galeryImgs: [{ type: String }],
    email: { type: String },
    website: { type: String },
    phone: { type: String },
    rules: { type: Array },
    isAvaibly: { type: Boolean, default: true },
    facilities: [
      {
        type: Schema.Types.ObjectId,
        ref: "HotelFacilities",
      },
    ],
    category: [
      {
        type: Schema.Types.ObjectId,
        ref: "HotelCategories",
      },
    ],
    services: [
      {
        type: Schema.Types.ObjectId,
        ref: "ExtraServices",
      },
    ],
    reviews: [
      {
        user: {
          type: mongoose.Types.ObjectId,
          ref: "User",
        },
        name: {type: String},
        rating: {type: Number},
        comment: {type: String},
      },
    ],
  },

  {
    timestamps: true,
  }
);

export const Hotels = mongoose.model("Hotels", hotelSchema);
