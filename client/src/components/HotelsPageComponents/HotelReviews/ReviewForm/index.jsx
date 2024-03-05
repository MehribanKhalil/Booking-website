import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/commonComponents/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { reviewValidationSchema } from "@/utils/validationSchema";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { UseAddReview } from "@/hooks/UseUserReview";
import * as yup from "yup";
import { useGetMe } from "@/hooks/UserHooks";
import { useNavigate } from "react-router-dom";


const ReviewForm = ({ dataId }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
 
  const {data, loading, error}=useGetMe()
  console.log(' get me ',data);

  const { mutate: addReviewMutation } = UseAddReview(dataId);

  const nav=useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, touchedFields, dirtyFields },
    setError,
  } = useForm({
    resolver: yupResolver(reviewValidationSchema),
    defaultValues: {
      review: "",
    },
  });

  const onSubmit = async (data) => {
   
    if (rating === 0) {
      setError("rating", { type: "manual", message: "Please select a rating" });
      return;
    }
     if (data){
      const formData = {
        ...data,
        rating: rating,
      };
      addReviewMutation(formData);
      setTimeout(() => reset(), 300);
      setRating(0)
      // console.log("formData", formData);
    } else {
      nav("/login")
    }
    
  };

  return (
    <div className="reviews-form py-8 border-neutral-400">
      <h3 className=" reviews-title text-2xl pb-4">
        Leave feedback about this hotel
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div>
            <Textarea
              placeholder="Write your review*"
              className="focus:border-blue-700 text-[17px] rounded-xl placeholder:text-[15px]"
              {...register("review")}
            />
            {errors.review && (
              <p className="error-message">{errors.review.message}</p>
            )}
          </div>

          <div>
            <div className="flex  text-lg  px-1 ">
                
              {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                  <>
                    <label className="cursor-pointer py-2 px-[2px]" key={index}>
                      <input
                        className=" hidden"
                        type="radio"
                        name="rating"
                        id=""
                        value={currentRating}
                        onClick={() => setRating(currentRating)}
                      />
                      <IoIosStar
                        size={20}
                        color={
                          currentRating <= (hover || rating)
                            ? "#ffc107"
                            : "#c5c3c3"
                        }
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                        className=" duration-300"
                      />
                    </label>
                  </>
                );
              })}
            </div>
          </div>
          <div>
          {errors.rating  && (
                    <p className="error-message px-1">{errors.rating.message}</p>
                )}
          </div>

          <div className="">
            <Button type="submit">
              {isSubmitting ? "Loading..." : "Submit"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
