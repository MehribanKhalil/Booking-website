import React from 'react'

const ActiviteCard = ({destination,tripName,kind}) => {
  return (
    <div className=' grid grid-cols-3 items-center  border-b border-white'>
        <p className=' font-medium'>{destination}</p>
        <p>{tripName}</p>
        <p>{kind}</p>
    </div>
  )
}

export default ActiviteCard