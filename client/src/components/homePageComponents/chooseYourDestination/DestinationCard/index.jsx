import React from 'react'
import './index.scss'

const DestinationCard = ({categoryTitle,categoryImage}) => {
    const cardStyle = {
        backgroundImage: `url('${categoryImage}')`,
      };
  return (
    <div id="category-card " className='h-[60vh]  text-white font-medium bg-cover bg-center flex justify-center items-center' style={cardStyle}>
        <div className=''>
            <h3  className='category-title text-3xl font-italic-font cursor-pointer'>{categoryTitle}</h3>
        </div>
  </div>
  )
}

export default DestinationCard