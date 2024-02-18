import express from "express";
import multer from 'multer'
import { createHotel, deleteHotel, getHotels, getHotelsById, updateHotel } from "../controllers/hotelController.js/hotelsController.js";
import { createLocation, getLocation } from "../controllers/hotelController.js/hotelsLocationController.js";
import { createFacility, deleteFacility, getFacility, getFacilityById, updateFacility } from "../controllers/hotelController.js/hotelFacilitiesController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/multerMiddleware.js";
import { createServices, deleteService, getServiceById, getServices, updateService } from "../controllers/hotelController.js/extraServiceController.js";
import { createCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from "../controllers/hotelController.js/hotelCategoryController.js";


const myHotels=express.Router()


//HOTELS routes
myHotels.get('/hotels',getHotels)
myHotels.get('/hotels/:id',getHotelsById)
myHotels.post('/hotels',upload.fields([{ name: 'mainImage', maxCount: 50 }, { name: 'galeryImgs', maxCount: 50 } ]),createHotel)
myHotels.put('/hotels/:id',upload.fields([{ name: 'mainImage', maxCount: 50 }, { name: 'galeryImgs', maxCount: 50 } ]),updateHotel)
myHotels.delete('/hotels/:id',deleteHotel)



//FACILITY routes
myHotels.get('/facility',getFacility)
myHotels.post('/facility',upload.single('facilityImage'),createFacility)
myHotels.put('/facility/:id',upload.single('facilityImage'),updateFacility)
myHotels.delete('/facility/:id',deleteFacility)
myHotels.get('/facility/:id',getFacilityById)


//CATEGORY routes
myHotels.post('/category',upload.single('categoryImage'),createCategory)
myHotels.get('/category',getCategories)
myHotels.get('/category/:id',getCategoryById)
myHotels.put('/category/:id',upload.single('categoryImage'),updateCategory)
myHotels.delete('/category/:id',deleteCategory)


//EXTRA SERVICES routes
myHotels.get('/services',getServices)
myHotels.post('/services',createServices)
myHotels.get('/services/:id',getServiceById)
myHotels.put('/services/:id',updateService)
myHotels.delete('/services/:id',deleteService)


export default myHotels


