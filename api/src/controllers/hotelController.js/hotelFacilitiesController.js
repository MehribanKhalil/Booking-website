import expressAsyncHandler from "express-async-handler";
import { HotelFacilities } from "../../models/hotelsModel/hotelFacilitiesModel.js";
import cloudinary from "cloudinary";


//GET FACILITY
export const getFacility = expressAsyncHandler(async (req, res) => {
  const facility = await HotelFacilities.find({});
  res.status(200).json({ facility });
});


//GET FACILITY BY ID
export const getFacilityById = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  let facility = await HotelFacilities.findById(id);
  if (!facility) {
    return res.status(404).json({ message: "Facility not found" });
  }
  res.status(200).json({ facility });
});


//CREATE FACILITY
export const createFacility = expressAsyncHandler(async (req, res) => {
  const { facilityTitle } = req.body;
  const facilityImage = await cloudinary.uploader.upload(req.file.path);

  const category = new HotelFacilities({
    facilityTitle,
    facilityImage: facilityImage.secure_url,
  });
  await category.save();
  res.status(200).json({ category });
});


// UPDATE FACILITY
export const updateFacility = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  let facilityImage;
  if (req.file) {
    facilityImage = await cloudinary.uploader.upload(req.file.path);
  }
  const existingFacility = await HotelFacilities.findByIdAndUpdate(
    id,
    {
      facilityTitle: req.body.facilityTitle,
      facilityImage: facilityImage.secure_url,
    },
    { new: true }
  );

  if (!existingFacility) {
    return res.status(400).json({ message: "Facility not found" });
 }

  res.status(200).json({ existingFacility });
});


// DELETE FACILITY
export const deleteFacility = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedFacility = await HotelFacilities.findByIdAndDelete(id);
  if (!deletedFacility) {
    return res.status(400).json({message : "deleted Facility not found"});
  }
  res.status(200).json({message:'Facility deleted' });
});
