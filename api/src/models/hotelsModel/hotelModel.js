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
    guests: { type: Number },
    // childCount: { type: Number }, //childcount menadiz
    // adultCount: { type: Number}, //adultcount menasiz
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
    // isRoomAvailable: { type: Boolean, default: true }, // adi deyisdim ingilisce sehv idi isAvaibli
    rooms: { type: Number },
    facilities: [
      {
        type: Schema.Types.ObjectId,
        ref: "HotelFacilities",
      },
    ],
    category: {
      type: Schema.Types.ObjectId,
      ref: "HotelCategories",
    },

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
        name: { type: String },
        rating: { type: Number },
        comment: { type: String },
      },
    ],
  },

  {
    timestamps: true,
  }
);

hotelSchema.statics.findAvailableHotels = async function (
  checkInDate,
  checkOutDate,
  rooms,
  guests
) {
  try {
    const hotels = await this.find({
      $and: [
        { rooms: { $gte: rooms } },
        { guests: { $gte: guests } },
        {
          $or: [
            {
              $and: [
                { checkInDate: { $lte: checkInDate } },
                { checkOutDate: { $gte: checkInDate } },
              ],
            },
            {
              $and: [
                { checkInDate: { $lte: checkOutDate } },
                { checkOutDate: { $gte: checkOutDate } },
              ],
            },
          ],
        },
      ],
    });
    return hotels;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const Hotels = mongoose.model("Hotels", hotelSchema);
