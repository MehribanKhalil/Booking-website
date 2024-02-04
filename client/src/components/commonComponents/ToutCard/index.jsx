import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";


const TourCard = () => {
  return (
    <div className=' tour-card overflow-hidden  border border-neutral-300 rounded-2xl group'>
      <div className=' card-img  overflow-hidden'>
       <NavLink>
       <img src="https://andit.co/projects/html/and-tour/demo/assets/img/tour/popular-2.png" 
        alt="Tour"
        className=' w-full group-hover:scale-105 duration-300'
        />
       </NavLink>
      </div>
      <div className=' card-content p-6 space-y-2'>
        <div className='tour-duration flex  gap-3 text-sm text-gray-500'>
          <p>7 nights 8 days tour</p>
          <p>Family tour</p>
        </div>
        <h3 className=' text-xl tour-title group-hover:text-mainColor duration-300 font-medium'><NavLink>London aliqua irure proident esse</NavLink></h3>
        <div className='location flex items-center  gap-1 text-gray-500'>
        <CiLocationOn size={20} />
        <p className=''>London, United Kingdom</p>
        </div>
        <div className=' flex justify-between items-end'>
        <div className='tour-reviews '>
          <p className=' font-medium text-mainColor text-lg'>4.8/5 Excellent</p>
          <h6 className=' text-sm text-gray-500'>(1214 reviewes)</h6>
        </div>
        <div className='tour-price'>
          <h5 className=' text-xl font-medium'>$99.00  <span className=' text-sm '>/Per person</span></h5>
        </div>
        </div>
      </div>
    </div>
  )
}

export default TourCard