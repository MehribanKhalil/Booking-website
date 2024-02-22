import mongoose from "mongoose";
const { Schema } = mongoose;

const bookingSchema = new Schema(
  {
    checkInDate: { type: Date },
    checkOutDate: { type: Date },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    hotelId: { type: Schema.Types.ObjectId, ref: "Hotels" },
    services: [
      {
        serviceId: { type: Schema.Types.ObjectId, ref: 'ExtraService' },
        quantity: { type: Number }
      }
    ], // elave eledim 
    numChildren: { type: Number },
    numAdults: { type: Number },
    daysOfStay: { type: Number },
    amountPaid: { type: Number },
    status: { type: String, enum: ["pending", "canceled", "confirmed"], default:"pending" },
    paidAt: {type: Date}
  },
  {
    timestamps: true,
  }
);



export const Bookings = mongoose.model("Bookings", bookingSchema);
