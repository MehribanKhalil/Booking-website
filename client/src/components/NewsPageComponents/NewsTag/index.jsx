import React from 'react'

const NewsTag = () => {
  return (
    <div className='pb-4' >
    <h2 className='class-h2 blog-about__h2  border-b-2 border-mainColor font-semibold m-0 pt-5 mb-10 '>TAGS</h2>
    <div className='tag-names max-w-[600px] '>
        <span className='italic  inline-block p-3 hover:bg-gray-200 cursor-pointer duration-300'>Artists</span>
        <span className='italic  inline-block p-3 hover:bg-gray-200 cursor-pointer duration-300'>Exhibitions</span>
          <span className='italic  inline-block p-3 hover:bg-gray-200 cursor-pointer duration-300'>Features</span>
          <span className='italic  inline-block p-3 hover:bg-gray-200 cursor-pointer duration-300'>Jobs</span>
          <span className='italic  inline-block p-3 hover:bg-gray-200 cursor-pointer duration-300'>Lectures</span>
    </div>
  </div>
  )
}

export default NewsTag