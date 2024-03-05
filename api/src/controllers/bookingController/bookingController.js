import expressAsyncHandler from "express-async-handler";
import { Bookings } from "../../models/bookingsModel/bookingModel.js";
import { User } from "../../models/userModel/userModel.js";
import { Hotels } from "../../models/hotelsModel/hotelModel.js";
import { ExtraServices } from "../../models/hotelsModel/extraServicesModel.js";

function calculateDaysOfStay(checkInDate, checkOutDate) {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);
  const timeDifference = checkOut.getTime() - checkIn.getTime();
  return Math.round(timeDifference / millisecondsPerDay);
}

//CREATE BOOKING
export const addBookings = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;
  const {
    hotelId,
    adultsCounts,
    services,
    childCounts,
    checkInDate,
    checkOutDate,
    amountPaid,
  } = req.body;

  console.log("booking", req.body);

  const foundServices = await ExtraServices.find({ _id: { $in: services } });

  const findRoom = await Hotels.findById(hotelId);
  const findUser = await User.findById(userId);

  if (!findUser) return res.status(404).json({ message: "User not found" });
  if (!findRoom) return res.status(404).json({ message: "Room not found" });

  if (!checkInDate || !checkOutDate) {
    return res.status(400).json({
      message: "You have to choose start date and end date for reservation",
    });
  }

  if (checkInDate <= Date.now()) {
    return res
      .status(400)
      .json({ message: "Start date must be after current date" });
  }

  if (checkInDate >= checkOutDate)
    return res
      .status(400)
      .json({ message: "Start date must be before end date" });

  const isRoomAvailable = await Bookings.findOne({
    hotelId: hotelId,
    $or: [
      {
        checkInDate: { $lte: checkInDate },
        checkOutDate: { $gte: checkInDate },
      },
      {
        checkInDate: { $lte: checkOutDate },
        checkOutDate: { $gte: checkOutDate },
      },
    ],
  });
  console.log(isRoomAvailable);

  if (findRoom.guests < adultsCounts + childCounts) {
    return res
      .status(400)
      .json({ message: `Must be total guest ${findRoom.guests}` });
  }

  if (isRoomAvailable) {
    return res
      .status(400)
      .json({ message: "This room is already booked for the specified dates" });
  }

  console.log(calculateDaysOfStay(checkInDate, checkOutDate));

  const newBooking = new Bookings({
    user: userId,
    hotelId: hotelId,
    services: foundServices.map((findService) => findService._id),
    checkInDate,
    checkOutDate,
    amountPaid,
    daysOfStay: calculateDaysOfStay(checkInDate, checkOutDate),
    paidAt: Date.now(),
  });

  const savedBookings = await newBooking.save();

  findUser.bookings.push(savedBookings._id);

  await findRoom.save();
  await findUser.save();
  res.status(200).json(savedBookings);
});

//GET BOOKING
export const getHotelBookings = expressAsyncHandler(async (req, res) => {
  const { hotelId } = req.params;
  const findHotel = await Bookings.find({ hotelId: hotelId }).populate(
    "hotelId"
  );
  if (!findHotel) return res.status(404).json({ message: "Not found booking" });

  res.status(200).json(findHotel);
});

export const getAvalibilityHotels = expressAsyncHandler(async (req, res) => {
  const { guests, checkIn, location, checkOut } = req.query;

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  const overlappingBookings = await Bookings.find({
    checkInDate: { $lt: checkOutDate },
    checkOutDate: { $gt: checkInDate },
  });

  const bookedHotelIds = overlappingBookings.map((booking) => booking.hotelId);

  const availableHotels = await Hotels.find({
    guests: { $gte: guests },
    _id: { $nin: bookedHotelIds },
  });

  res.json(availableHotels);
});

//UPDATE BOOKINGS
export const updateBookings = expressAsyncHandler(async (req, res) => {
  const { bookingId } = req.params;
  const { checkInDate, userId, checkOutDate, roomId } = req.body;
  const findBooking = await Bookings.findById(bookingId);
  if (!findBooking)
    return res.status(404).json({ message: "Booking not found" });

  if (findBooking.user !== userId)
    return res.status(400).json({ message: "You are not this user" });

  findBooking.checkInDate = checkInDate;
  findBooking.checkOutDate = checkOutDate;
  findBooking.room = roomId;
});

//GET SIMILAR HOTELS BY CATEGORY
export const getSimiralHotels = expressAsyncHandler(async (req, res) => {
  const { hotelId } = req.params;
  console.log(hotelId);

  const findHotel = await Hotels.findById(hotelId);
  if (!findHotel) return res.status(404).json({ message: "Hotel not found" });

  const categoryId = findHotel.category;
  console.log("categoryId", categoryId);

  const findHotels = await Hotels.find({
    _id: { $ne: hotelId },
    category: { $in: categoryId },
  });

  res.status(200).json(findHotels);
});
