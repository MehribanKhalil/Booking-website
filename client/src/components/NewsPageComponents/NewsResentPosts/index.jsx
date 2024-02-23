import React from 'react'
import './index.scss'
import RecentPostCard from '../RecentPostCard'

const NewsRecentPosts = () => {
  return (
    <div>
            <h2 className="class-h2  border-b-2 border-mainColor font-semibold m-0 pt-5 mb-10 ">
              RECENT POSTS
            </h2>
            <div className=' space-y-3'>
            <RecentPostCard
              recentPostImg='http://localhost:5175/src/assets/images/blog-img/recent-post1.jpg'
              recentPostTitle="MAKE IT SIMPle"

              recentPostDate="23.4.2023"
              
            />
            <RecentPostCard
              recentPostImg='http://localhost:5175/src/assets/images/blog-img/recent-post1.jpg'
              recentPostTitle="COFFEE SHOP"
              recentPostDate="13.2.2022"
            />
            <RecentPostCard
              recentPostImg='http://localhost:5175/src/assets/images/blog-img/recent-post1.jpg'
              recentPostTitle="COFFEE BAR"
              recentPostDate="1.6.2023"
            />
            </div>
          </div>
  )
}

export default NewsRecentPosts