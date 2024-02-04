import React from 'react'

const SectionTitle = ({title,subtitle,className}) => {
  return (
    <div className={` ${className} section-title space-y-3`}>
        <h2 className=' text-4xl font-semibold'>{title}</h2>
        <h4 className=' font-medium text-gray-500'>{subtitle}</h4>
    </div>
  )
}

export default SectionTitle