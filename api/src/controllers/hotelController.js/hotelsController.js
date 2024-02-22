import expressAsyncHandler from "express-async-handler";
import { HotelLocation } from "../../models/hotelsModel/hotelLocationModel.js";
import { Hotels } from "../../models/hotelsModel/hotelModel.js";
import cloudinary from "cloudinary";
import { HotelFacilities } from "../../models/hotelsModel/hotelFacilitiesModel.js";
import { HotelCategories } from "../../models/hotelsModel/hotelCategoryModel.js";
import { ExtraServices } from "../../models/hotelsModel/extraServicesModel.js";

//GET HOTEL
export const getHotels = expressAsyncHandler(async (req, res) => {
  const hotels = await Hotels.find({})
    .populate("category")
    .populate("facilities")
    .populate("services");

  if (!hotels) {
    return res.status(400).json({ message: "Hotels not found" });
  }
  res.status(200).json(hotels);
});

//GET HOTEL BY ID
export const getHotelsById = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const hotel = await Hotels.findById(id)
    .populate("category")
    .populate("facilities")
    .populate("services");

  if (!hotel) {
    return res.status(400).json({ message: "Hotel not found" });
  }
  res.status(200).json(hotel);
});

//CREATE HOTEL
export const createHotel = expressAsyncHandler(async (req, res) => {
const { categoryId, facilitiesId, servicesId } = req.body;

  //HOTEL IMAGES
  const mainImage = await cloudinary.uploader.upload(
    req.files.mainImage[0].path
  );
  const uploadPromises = req.files.galeryImgs.map(async (file) => {
    const result = await cloudinary.uploader.upload(file.path);
    return result.secure_url;
  });
  const galeryImgs = await Promise.all(uploadPromises);

  //HOTEL FACILITIES
  const foundFacilities = await HotelFacilities.find({ _id: { $in: facilitiesId } });

  //HOTEL SERICES
  const foundServices = await ExtraServices.find({ _id: { $in: servicesId } });


  const hotel = new Hotels({
    ...req.body,
    facilities: foundFacilities.map(facility => facility._id),
    services:foundServices.map(service=>service._id),
    galeryImgs:galeryImgs,
    mainImage: mainImage.secure_url,
  });
  const savedHotel = await hotel.save();
  const updatedFacilitiesPromises = foundFacilities.map(async facility => {
    facility.hotels.push(savedHotel._id);
    await facility.save(); 
  });
  const updatedServicePromises= foundServices.map( async service=>{
    service.hotels.push(savedHotel._id)
    await service.save()
  })

  await Promise.all(updatedFacilitiesPromises);
  await Promise.all(updatedServicePromises);
  res.status(201).json(savedHotel);
});


//UPDATE HOTEL
export const updateHotel = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { categoryId, facilitiesId, servicesId } = req.body;


  const mainImage = await cloudinary.uploader.upload(
    req.files.mainImage[0].path
  );

  const uploadPromises = req.files.galeryImgs.map(async (file) => {
    const result = await cloudinary.uploader.upload(file.path);
    return result.secure_url;
  });

  const galeryImgs = await Promise.all(uploadPromises);

  const existingHotel = Hotels.findByIdAndUpdate(id, {
    ...req.body,
    mainImage: mainImage.secure_url,
    category: categoryId,
    facilities: facilitiesId,
  });

  if (!existingHotel) {
    return res.status(400).json({ message: "Hotel not found" });
  }
  res.status(201).json(existingHotel);
});


//DELETE HOTEL
export const deleteHotel = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedHotel = await Hotels.findByIdAndDelete(id);
  if (!deletedHotel) {
    return res.status(400).json({ message: "deleted Hotel not found" });
  }
  res.status(200).json({ message: "Hotel deleted" });
});


//GET HOTEL BY CATEGORY
export const getHotelByCategory = expressAsyncHandler(async (req, res) => {
  const { categoryId } = req.params;
  const hotels = await Hotels.find({ category: categoryId });
  res.status(200).json(hotels);
})



//FILTER HOTELS
export const getAvailableHotels = expressAsyncHandler(async (req, res) => {
  const { checkInDate, checkOutDate, rooms, guests } = req.body;

  const availableHotels = await Hotels.findAvailableHotels(
    checkInDate,
    checkOutDate,
    rooms,
    guests
  );
  res.status(200).json(availableHotels);
});