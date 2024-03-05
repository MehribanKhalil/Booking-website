import React from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import { useGetReviews } from "@/hooks/UseUserReview";

const HotelReviews = ({ dataId }) => {
  const { data, isLodading, error } = useGetReviews(dataId);
  console.log('reviews', data);
  return (
    <div className="room-reviews py-8 border-neutral-400">
      <h3 className=" reviews-title text-2xl md:text-3xl pb-4">Room Reviews</h3>
      <div className="max-w-[800px]">
        {data?.length===0 ? <p className=" italic">No comments yet</p> :
        data?.map((review) => (
          <React.Fragment key={review._id}>
            <Review
            userName={review?.user?.userName}
            createdAt={review?.createdAt?.toString().split('T')[0]}
            review={review?.review}
            rating={review?.rating}
            reviewId={review?._id}
            likes={review?.likes}
            userId={review?.user?._id}
          />
          </React.Fragment>
        ))}
        
      </div>
      <ReviewForm dataId={dataId} />
    </div>
  );
};

export default HotelReviews;
