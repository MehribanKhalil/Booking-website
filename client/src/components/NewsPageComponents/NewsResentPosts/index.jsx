import React from 'react'
import './index.scss'
import RecentPostCard from '../RecentPostCard'
import Loader from '@/components/commonComponents/Loader'

const NewsRecentPosts = ({data,isLoading}) => {
  if(isLoading){
    return <Loader/>
  }
  return (
    <div>
            <h2 className="class-h2  border-b-2 border-gray-400 font-semibold m-0 pt-5 mb-10 ">
              RECENT POSTS
            </h2>
            <div className=' space-y-3'>

              {
                data.slice(0,3).map(blog=>(
                  <RecentPostCard
                  recentPostImg={blog.image}
                  recentPostTitle={blog.title}
    
                  recentPostDate={blog.createdAt.toString().split("T")[0]}
                  
                />
                ))
              }
           
           
            </div>
          </div>
  )
}

export default NewsRecentPosts