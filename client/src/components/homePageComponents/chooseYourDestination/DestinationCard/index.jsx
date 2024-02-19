import React from 'react'
import './index.scss'

const DestinationCard = ({categoryTitle,categoryImage}) => {
    const cardStyle = {
        backgroundImage: `linear-gradient(#00000003, #000000a5), url('${categoryImage}')`,
      };
  return (
   <div className='overflow-hidden'>
     <div id="category-card " className=' hover:scale-110  duration-500 h-[50vh]  text-white font-medium bg-cover bg-center flex justify-center items-center' style={cardStyle}>
        <div className=''>
            <h3  className='category-title text-3xl font-italic-font cursor-pointer'>{categoryTitle}</h3>
        </div>
  </div>
   </div>
  )
}

export default DestinationCard