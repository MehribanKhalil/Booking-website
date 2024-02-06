import React from 'react'

const PageTitle = ({title}) => {
  return (
    <div className=" flex justify-center flex-col items-center pb-10">
          <h2 className=" text-4xl font-semibold pb-3">
            {title}
          </h2>
          <span className="  w-[200px] h-[2px] bg-black "></span>
        </div>
  )
}

export default PageTitle