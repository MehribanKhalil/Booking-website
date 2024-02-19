import expressAsyncHandler from "express-async-handler";
import { HotelCategories } from "../../models/hotelsModel/hotelCategoryModel.js";
import cloudinary from "cloudinary";


//GET CATEGORY
export const getCategories = expressAsyncHandler(async (req, res) => {
  const category = await HotelCategories.find({});
  res.status(200).json( category );
});


//GET CATEGORY BY ID
export const getCategoryById = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  let category = await HotelCategories.findById(id);
  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }
  res.status(200).json({ category });
});


//CREATE CATEGORY
export const createCategory = expressAsyncHandler(async (req, res) => {
  const { categoryName } = req.body;

  const categoryImage = await cloudinary.uploader.upload(req.file.path);

  const category = new HotelCategories({
    categoryName,
    categoryImage: categoryImage.secure_url,
  });
  await category.save();
  res.status(200).json({ category });
});


// UPDATE CATEGORY
export const updateCategory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  let categoryImage;
  if (req.file) {
    categoryImage = await cloudinary.uploader.upload(req.file.path);
  } 
  const existingCategory = await HotelCategories.findByIdAndUpdate(
    id,
    {
      categoryName: req.body.categoryName,
      categoryImage: categoryImage.secure_url,
    },
    { new: true }
  );


  if (!existingCategory) {
    return res.status(400).json({ message: "Category not found" });
 }

  res.status(200).json({ existingCategory });
});


// DELETE CATEGORY
export const deleteCategory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedCategory = await HotelCategories.findByIdAndDelete(id);
  if (!deletedCategory) {
    return res.status(400).json({message : "deleted Category not found"});
  }
  res.status(200).json({message:'Category deleted' });
});
