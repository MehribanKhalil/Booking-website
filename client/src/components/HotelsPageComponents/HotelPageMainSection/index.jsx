import HeroHotelCard from '@/components/commonComponents/HeroHotelCard'
import React from 'react'

const HotelPageMainSection = () => {
  return (
    <div className=' wrapper  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
      <HeroHotelCard />
      <HeroHotelCard />
      <HeroHotelCard />
      <HeroHotelCard />
      <HeroHotelCard />
      <HeroHotelCard />

    </div>
  )
}

export default HotelPageMainSection