import StarRating from "@/components/commonComponents/StartRating";
import { UseLikeReview } from "@/hooks/UseUserReview";
import { useGetMe } from "@/hooks/UserHooks";
import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { toast } from "sonner";


const Review = ({reviewId,review,userName,createdAt,rating,likes}) => {

  const {data}=useGetMe()

  const hotelId=useParams()
  const [userHasLiked, setUserHasLiked] = useState(likes.includes(data?._id));
  console.log('userId',data?._id);

  const { mutate: likeReviewMutation } = UseLikeReview(hotelId.id, reviewId,userHasLiked);
  const handleLike=()=>{
    likeReviewMutation()
    setUserHasLiked(!userHasLiked)
  }

  console.log('userHasLiked',likes.includes(data?._id));

  const likesCount=likes.length



  return (
    <div className=" hotel-review border-b border-neutral-300 py-5 mb-5">
      <div className="user-info flex justify-between items-center w-full">
        <div className="flex gap-3 items-center">
          <div>
            <img
              src={data.avatar}
              alt=""
              className=" rounded-full w-[40px] h-[40px] object-contain"
            />
          </div>
          <div className="text-sm">
            <h4 className=" font-sans  font-medium">{userName}</h4>
            <p className=" text-gray-500">{createdAt}</p>
          </div>
        </div>
        <div className=" flex items-center  ">
            <button className="text-gray-600 p-1 cursor-pointer text-lg" onClick={handleLike}>
              <AiOutlineLike color={userHasLiked ? "var(--main-color)" : '#808080'} />
              </button>
            <span className="text-gray-800">{likesCount}</span>
        </div>
      </div>
      <div className="user-rate p-1">
        <StarRating rating={rating} />
      </div>

      <div className="user-review">
        <p className=" text-gray-500"> {review}</p>
      </div>
    </div>
  );
};

export default Review;
