import mongoose from "mongoose";

const { Schema } = mongoose;

const extraServiceSchema = new Schema(
  {
    // image: { type: String},
    serviceName: { type: String},
    hotels:[{type:Schema.Types.ObjectId, ref:'Hotels'}],
    description: { type: String },
    price: { type: Number},
  },
  { timestamps: true}
);

export const ExtraServices = mongoose.model("ExtraServices", extraServiceSchema);
