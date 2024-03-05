import { ModeToggle } from '@/components/mode-toggle'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHotel } from "react-icons/fa6";
import { RiHotelLine } from "react-icons/ri";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { LuUsers2 } from "react-icons/lu";
import { TbCategory } from "react-icons/tb";
import { FaQuestion } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { FaImages } from "react-icons/fa";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { GrSupport } from "react-icons/gr";
import './index.scss'
const AdminNavbar = () => {
  return (
    <nav id='admin-navbar' className=' w-200px h-[100vh] bg-secondary-foreground text-secondary dark:bg-bacl dark:text-primary  fixed z-20  px-16 flex items-center'>
    <div className='  w-full  h-full'>
       <div className='flex flex-col justify-center gap-4  w-full h-full'>
       <div className='my-3'>
       <ModeToggle/>
       </div>
       <NavLink to='/admin/gethotels' className='flex items-center  gap-2  py-1 rounded-lg '><FaHotel /> Hotels </NavLink>
        <NavLink to='/admin/createHotels' className='flex items-center  gap-2  py-1 rounded-lg'><RiHotelLine size={20} /> Create Hotels</NavLink>
        <NavLink to='/admin/bookings' className='flex items-center  gap-2  py-1 rounded-lg'><BsLayoutTextWindowReverse /> Bookings</NavLink>
        <NavLink to='/admin/users' className='flex items-center  gap-2  py-1 rounded-lg'><LuUsers2 /> Users</NavLink>
        <NavLink to='/admin/categories' className='flex items-center  gap-2  py-1 rounded-lg'><TbCategory /> Categories</NavLink>
        <NavLink to='/admin/facilities' className='flex items-center  gap-2  py-1 rounded-lg'> <MdOutlineFeaturedPlayList /> Facilities</NavLink>
        <NavLink to='/admin/faqs' className='flex items-center  gap-2  py-1 rounded-lg'><FaQuestion /> FAQs</NavLink>
        <NavLink to='/admin/services' className='flex items-center  gap-2  py-1 rounded-lg'><GrSupport /> Services</NavLink>
        {/* <NavLink to='/admin/images' className='flex items-center  gap-2  py-1 rounded-lg'><FaImages /> Images</NavLink> */}
        {/* <NavLink to='/admin/reviews' className='flex items-center  gap-2  py-1 rounded-lg'> <MdOutlineRateReview /> Reviews</NavLink> */}
       </div>
    </div>
</nav>
  )
}

export default AdminNavbar