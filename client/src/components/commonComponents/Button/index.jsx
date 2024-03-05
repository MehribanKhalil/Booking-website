import React from 'react'

const Button = ({children, type,onClick}) => {
  return (
    <button onClick={onClick} type={type} className=' bg-mainColor text-white px-8 py-3 font-medium  rounded-md'>
        {children}
    </button>
  )
}

export default Button