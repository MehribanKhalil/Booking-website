import expressAsyncHandler from "express-async-handler";
import { Bookings } from "../../models/bookingsModel/bookingModel.js";
import { User } from "../../models/userModel/userModel.js";
import { Hotels } from "../../models/hotelsModel/hotelModel.js";


//CREATE BOOKING
export const addBookings = expressAsyncHandler(async (req, res) => {
  //const { userId } = req.user middlewareden
  //   const { hotelId, checkInDate, userId, checkOutDate } = req.body;
  const { hotelId, checkInDate, checkOutDate, amountPaid, daysOfStay, userId } =
    req.body;
  const findRoom = await Hotels.findById(hotelId);
  const findUser = await User.findById(userId);
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

  //   if (!findRoom.isAvaibly)
  //     return res.status(404).json({ message: "This room is reserved" });

  const newBooking = new Bookings({
    user: userId,
    hotel: hotelId,
    checkInDate,
    checkOutDate,
    amountPaid,
    daysOfStay,
    paidAt: Date.now(),
  });

  const savedBookings = await newBooking.save();

  //   findRoom.isAvaibly = false;

  //   if (findUser.bookings.includes(savedBookings._id)) {
  //     res.status(400).json({ message: "You already booked" });
  //   }
  //   findUser.bookings.push(newBooking._id);

  //   await findRoom.save();
  //   await findUser.save();
  res.status(200).json(savedBookings);
});




//GET BOOKING
export const getHotelBookings = expressAsyncHandler(async (req, res) => {
  const { hotelId } = req.params;
  const findHotel = await Bookings.find({ room: hotelId });

  if (!findHotel) return res.status(404).json({ message: "Not found booking" });

  res.status(200).json(findHotel);
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
