import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";


const HotelPageCard = ({mainImage,title,size,adultCount,bedCount,bathroomCount,description,facility,_id}) => {
  return (
    <div className='hotel-page-card flex flex-col md:flex-row gap-16 items-center'>
        <div className='overflow-hidden w-full md:w-[50%]'>
            <img src={mainImage} 
             className=' object-cover  hover:scale-110 duration-500 cursor-pointer'
            alt="" />
        </div>
        <div className=' text-center space-y-5 w-full md:w-[50%]'>
            <div>
              {facility}
            {/* Private Pool / Ocean View / Single Level */}
            </div>
            <h3 className=' text-3xl'>
                <Link to={`/detail/${_id}`}>{title}</Link>
            </h3>
            <div className=' flex gap-3 justify-center'>
                <span>{size}m</span>
                <span>{adultCount} Guests</span>
                <span>{bedCount} King Bed</span>
                <span>{bathroomCount} Bathroom</span>
            </div>
            <p>{description}</p>
            <Link to={`/detail/${_id}`} className=" inline-block space-y-1 group-[button] relative">
            <span className="flex items-center gap-1 hover:gap-3 duration-500">Discover More <MdKeyboardArrowRight size={18} /></span>
            <span className=" bg-mainColor block w-full h-[1px] duration-500  group-hover:w-0 "></span>
          </Link>

        </div>
    </div>
  )
}

export default HotelPageCard