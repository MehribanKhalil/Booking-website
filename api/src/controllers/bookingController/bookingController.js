import expressAsyncHandler from "express-async-handler";
import { Bookings } from "../../models/bookingsModel/bookingModel.js";
import { User } from "../../models/userModel/userModel.js";
import { Hotels } from "../../models/hotelsModel/hotelModel.js";
import { ExtraServices } from "../../models/hotelsModel/extraServicesModel.js";

//CREATE BOOKING
export const addBookings = expressAsyncHandler(async (req, res) => {
  //const { userId } = req.user middlewareden
  //   const { hotelId, checkInDate, userId, checkOutDate } = req.body;
  const userId = req.user._id;
  console.log(req.body);
  const {
    hotelId,
    // serviceIds,
    // serviceQuantity,
    adultsCounts,
    childCounts,
    checkInDate,
    checkOutDate,
    amountPaid,
  } = req.body;

  const findRoom = await Hotels.findById(hotelId);
  const findUser = await User.findById(userId);

  // const totalGuests = adultsCounts + childCounts;
  // const totalServices = serviceQuantity.reduce(
  //   (total, quantity) => total + quantity,
  //   0
  // );

  // if (totalServices > totalGuests) {
  //   return res
  //     .status(400)
  //     .json({ message: "Total services cannot exceed total guests" });
  // }

  // const newServices = serviceIds.map((serviceId, index) => ({
  //   serviceId,
  //   quantity: serviceQuantity[index],
  // }));

  if (!findUser) return res.status(404).json({ message: "User not found" });
  if (!findRoom) return res.status(404).json({ message: "Room not found" });

  if (checkInDate <= Date.now()) {
    return res
      .status(400)
      .json({ message: "Start date must be after now date" });
  }

  if (checkInDate >= checkOutDate)
    return res
      .status(400)
      .json({ message: "Start date must be before end date" });

  // if (!findRoom.isRoomAvailable)
  //   return res.status(404).json({ message: "This room is reserved" });

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

  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const timeDifference = checkOut.getTime() - checkIn.getTime();

  const daysOfStay = Math.round(timeDifference / millisecondsPerDay);

  const newBooking = new Bookings({
    user: userId,
    // services: newServices,
    hotelId: hotelId,
    checkInDate,
    checkOutDate,
    amountPaid,
    daysOfStay,
    paidAt: Date.now(),
  });

  const savedBookings = await newBooking.save();

  // findRoom.isRoomAvailable = false;

  //   if (findUser.bookings.includes(savedBookings._id)) {
  //     res.status(400).json({ message: "You already booked" });
  //   }
  //   findUser.bookings.push(newBooking._id);

  await findRoom.save();
  await findUser.save();
  res.status(200).json(savedBookings);
});

//GET BOOKING
export const getHotelBookings = expressAsyncHandler(async (req, res) => {
  const { hotelId } = req.params;
  const findHotel = await Bookings.find({ hotelId: hotelId });
  if (!findHotel) return res.status(404).json({ message: "Not found booking" });

  res.status(200).json(findHotel);
});

//GET SIMILAR HOTELS BY CATEGORY
export const getSimiralHotels = expressAsyncHandler(async (req, res) => {
  const { hotelId } = req.params;

  const findHotel = await Hotels.findById(hotelId);
  if (!findHotel) return res.status(404).json({ message: "Not found booking" });

  const categoryIds = findHotel.category.map((category) => category._id);

  const findHotels = await Hotels.find({
    _id: { $ne: hotelId },
    category: { $in: categoryIds },
  });

  res.status(200).json(findHotels);
});

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


