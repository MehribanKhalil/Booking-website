import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <nav id='admin-navbar' className=' w-200px h-[100vh] bg-mainColor text-white  fixed z-20  px-16 flex items-center'>
    <div className=' flex flex-col justify-center gap-4 w-full  h-full'>
        <NavLink to='admin/gethotels'>Hotels</NavLink>
        <NavLink to='admin/createHotels'>Create Hotels</NavLink>
        <NavLink to='admin/categories'>Categories</NavLink>
        <NavLink to='admin/facilities'>Facilities</NavLink>
    </div>
</nav>
  )
}

export default AdminNavbar