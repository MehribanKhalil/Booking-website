import React from 'react'

const BenefitCard = ({image,info}) => {
  return (
    <div className=" border-l px-4 border-mainColor benefit-card flex gap-4 items-center text-mainColor">
    <img
      src={image}
      alt="benefit-card"
      className="max-w-[60px]"
    />
    <p className="">{info}</p>
  </div>
  )
}

export default BenefitCard