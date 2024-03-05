import React from "react";
// flex flex-col justify-center items-center max-w-[600px] mx-auto text-center space-y-5
const TestimonialCard = ({ image, title, feedback , userName,position}) => {
  return (
    <div className=" space-y-3 testimonial-card flex justify-center flex-col items-center text-center">
      <div>
        <img src={image} alt="user image" className=" w-[100px] h-[100px] object-cover rounded-full" />
      </div>
      <h3 className=" text-2xl text-mainColor font-medium">{title}</h3>
      <p className=" text-gray-600  font-medium">{feedback}</p>
      <div>
      <h5 className=" font-semibold">{userName}</h5>
      <p className=" text-gray-600 ">{position}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
