import React from 'react'

const Button = ({children, type}) => {
  return (
    <button type={type} className=' bg-mainColor text-white px-8 py-3 font-medium text-lg  rounded-md'>
        {children}
    </button>
  )
}

export default Button