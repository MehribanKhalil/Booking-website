import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'


const RecentPostCard = ({recentPostImg,recentPostTitle,recentPostDate}) => {
  return (
    <div className='recent-post '>
        
    <div>
        <div className=' flex gap-4'>
            <Link className=' w-1/2'>
                <img className='recent-posts__img' src={recentPostImg} alt="" />
            </Link>
            <div className=''>
                <Link className='class-h2 recent-post__title text-[12px] font-medium  text-neutral-800'>{recentPostTitle}</Link>
                <p className='recent-post__date'>{recentPostDate}</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default RecentPostCard