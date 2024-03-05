import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'


const RecentPostCard = ({recentPostImg,recentPostTitle,recentPostDate}) => {
  return (
    <div className='recent-post  '>
        
    <div>
        <div className=' flex gap-4'>
            <Link className=''>
                <img className='recent-posts__img rounded-xl object-cover w-[100px] h-[100px]'  src={recentPostImg} alt="" />
            </Link>
            <div className=' space-y-1'>
                <Link className='class-h2 recent-post__title text-sm  font-medium  text-neutral-800'>{recentPostTitle}</Link>
                <p className='recent-post__date '>{recentPostDate}</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default RecentPostCard