
import { HotelLocation } from "../../models/hotelsModel/hotelLocationModel.js";


export const getLocation = async (req, res) => {
  try {
    const location = await HotelLocation.find({});
    res.status(200).json({ location });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};


export const createLocation = async (req, res) => {
    try {
      const location = new HotelLocation({...req.body})
      await location.save()
      res.status(200).json({ location });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

