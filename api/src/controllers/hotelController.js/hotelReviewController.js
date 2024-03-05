import expressAsyncHandler from "express-async-handler";
import { Hotels } from "../../models/hotelsModel/hotelModel.js";
import { User } from "../../models/userModel/userModel.js";

//ADD REVIEW
export const addReview = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const { review, rating } = req.body;
  const userId = req.user._id;
  "review: " + review;

  const existingReview = await Hotels.findOne({
    _id: id,
    "reviews.user": userId,
  });

  if (existingReview) {
    return res
      .status(400)
      .json({ message: "You have already submitted a review for this hotel" });
  }

  const findHotel = await Hotels.findById(id);

  const findUser = await User.findById(userId);

  if (!findHotel) {
    return res.status(404).json({ message: "Hotel not found" });
  }
  if (!findUser) {
    return res.status(404).json({ message: "User not found" });
  }

  const newReview = {
    user: userId,
    rating: rating,
    review: review,
  };

  findHotel.reviews.push(newReview);

  const reviews = findHotel.reviews;
  let overallRating = 0;

  if (reviews.length > 0) {
    const totalRatings = findHotel.reviews.reduce(
      (acc, review) => acc + Number(review.rating),
      0
    );
    overallRating = totalRatings / reviews.length;
  }

  findHotel.starRating = overallRating;

  await findHotel.save();
  res.status(200).json(findHotel);
});

//GET REVIEW
export const getReviews = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const findHotel = await Hotels.findById(id)
    .populate("reviews.user")
    .sort({ "reviews.createdAt": -1 });
  if (!findHotel) {
    return res.status(404).json({ message: "Hotel not found" });
  }
  const reviews = findHotel.reviews;
  res.status(200).json(reviews);
});

//DELETE REVIEW
export const deleteReview = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { reviewId } = req.body;

  const findHotel = await Hotels.findById(id);
  if (!findHotel) {
    return res.status(404).json({ message: "Hotel not found" });
  }

  const reviewIndex = findHotel.reviews.findIndex(
    (review) => review._id.toString() === reviewId
  );

  if (reviewIndex === -1) {
    return res.status(404).json({ message: "Review not found" });
  }

  findHotel.reviews.splice(reviewIndex, 1);

  await findHotel.save();

  res.status(200).json({ message: "Review deleted successfully" });
});

//LIKE COMMENT
export const addLikeToReview = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log("userId", userId);
    const { id } = req.params;
    const { reviewId } = req.body;
    const findUser = await User.findById(userId);

    const findHotel = await Hotels.findById(id);
    if (!findUser) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!findHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    const review = findHotel.reviews.find((review) => review._id == reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    const reviewHasLike = review.likes.includes(userId);

    console.log("reviewHasLike", reviewHasLike);

    if (!reviewHasLike) {
      review.likes.push(userId);
    } else {
      review.likes.pull(userId);
    }
    await findHotel.save();
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
