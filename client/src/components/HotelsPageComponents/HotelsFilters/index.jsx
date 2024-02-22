import React from 'react'
import CategoryFilter from '../CategoryFilter'
import StarRatingFilter from '../StartRatingFilter'
import FacilityFilter from '../FacilityFilter'
import HotelSearchByName from '../HotelSearchByName'

const HotelsFilters = () => {
  return (
    <div className='hotels-filter space-y-8'>
      <HotelSearchByName/>
      <CategoryFilter/>
      <StarRatingFilter/>
      <FacilityFilter/>
    </div>
  )
}

export default HotelsFilters