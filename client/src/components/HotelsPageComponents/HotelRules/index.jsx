import Loader from '@/components/commonComponents/Loader';
import useGetHotelDetail from '@/hooks/UseGetHotels';
import React from 'react'
import { useParams } from 'react-router-dom';

const HotelRules = () => {
  const { id } = useParams();
  const { isLoading, data, error } = useGetHotelDetail(id)
  if (isLoading) {
    return <Loader/>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className='hotel-rules py-8 border-b border-neutral-400'>
      <h3 className=" facility-title text-2xl md:text-3xl pb-4">Room Rules</h3>

        <div>
            <ul className='px-4 space-y-2 text-lg text-neutral-800 cursor-pointer'>
              {
                data.rules.map((rule,i)=>(
                  <li className='list-disc' key={i}>
                    <p>{rule}</p>
                  </li>

                ))
              }
            </ul>
        </div>

    </div>
  )
}

export default HotelRules