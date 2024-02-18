import React from 'react'

const HotelContactInfo = ({email,phone,website}) => {

  return (
    <div className='hotel-contact-info shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-5 py-7 rounded-md'>
        <h4 className=' text-2xl pb-5 font-semibold'>Hotel Contact Information</h4>
        <div className=' space-y-4'>
            <div className=' space-y-1'>
                <p className=' font-medium text-neutral-800' >Email</p>
                <p className=' text-gray-600 cursor-pointer'>{email}</p>
            </div>

            <div className=' space-y-1'>
                <p className=' font-medium text-neutral-800'>Phone</p>
                <p className='text-gray-600 cursor-pointer'>{phone}</p>
            </div>

            <div className=' space-y-1'>
                <p className='font-medium text-neutral-800'> Website</p>
                <p className='text-gray-600 cursor-pointer'>{website}</p>
            </div>

        </div>
    </div>
  )
}

export default HotelContactInfo