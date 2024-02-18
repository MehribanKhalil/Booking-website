import expressAsyncHandler from "express-async-handler";
import { ExtraServices } from "../../models/hotelsModel/extraServicesModel.js";

//GET SERVICE
export const getServices = expressAsyncHandler(async (req, res) => {
  const extraService = await ExtraServices.find({});
  res.status(200).json({ extraService });
});

//GET SERVICE BY ID
export const getServiceById = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  let extraService = await ExtraServices.findById(id);
  if (!extraService) {
    return res.status(404).json({ message: "Service not found" });
  }
  res.status(200).json({ extraService });
});

//CREATE SERVICE
export const createServices = expressAsyncHandler(async (req, res) => {
  const { serviceName, description, price } = req.body;
  const extraService = new ExtraServices({
    serviceName,
    description,
    price,
  });
  await extraService.save();
  res.status(200).json({ extraService });
});

// UPDATE SERVICE
export const updateService = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const existingService = await ExtraServices.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true }
  );
  if (!existingService) {
     return res.status(400).json({ message: "Service not found" });
  }
  res.status(200).json({ existingService });
});

// DELETE SERVICE
export const deleteService = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedService = await ExtraServices.findByIdAndDelete(id);
  if (!deletedService) {
    return res.status(400).json({ message: "deleted Service not found" });
  }
  res.status(200).json({ message: "Service deleted" });
});
