import React from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

const StarRating = ({ rating }) => {
  const starArray = Array.from({ length: 5 }, (_, index) => {
    if (index < Math.floor(rating)) {
      return <IoIosStar key={index} />;
    } else if (index === Math.floor(rating) && rating % 1 !== 0) {
      return <IoIosStarOutline key={index} />;
    } else {
      return <IoIosStarOutline key={index} />;
    }
  });

  return (
    <div className="hotel-rating flex gap-1 text-yellow-400 py-2">
      {starArray}
    </div>
  );
};

export default StarRating;
