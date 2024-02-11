import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";


const ProfileTabButtons = ({handleToggle,toggle}) => {
  return (
    <div className='profile-tab-buttons border border-gray-100 rounded-lg p-5 text-gray-500 font-medium  flex gap-5'>
        <button  onClick={()=>handleToggle("1")} className={`hover:bg-gray-200  px-4 py-2 rounded-lg duration-300 flex items-center gap-1 ${toggle==='1' ? " bg-gray-200" : 'bg-gray-50'}`}><IoSettingsOutline size={20} /> Account settings</button>
        {/* <button className=' hover:bg-gray-200 bg-gray-50 px-4 py-2 rounded-lg duration-300'>Manage Password</button> */}
        <button onClick={()=>handleToggle("2")} className={`hover:bg-gray-200  px-4 py-2 rounded-lg duration-300 flex items-center gap-1 ${toggle==='2' ? " bg-gray-200" : 'bg-gray-50'}`}><MdHistory size={20} /> Order History</button>
        <button className=' hover:bg-gray-200 bg-gray-50 px-4 py-2 rounded-lg duration-300 flex items-center gap-1'><MdOutlinePayment size={20} /> Payment methods </button>
    </div>
  )
}

export default ProfileTabButtons