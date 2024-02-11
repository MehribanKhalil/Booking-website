import React from 'react'
import './index.scss'

const HeroSection = () => {
  return (
    <section id='hero-section'>
        {/* <div className="hero-content  text-white max-w-[1200px] mx-auto px-5">
            <p className=' font-semibold  md:text-2xl'>Unforgettable travel experience with AndTour</p>
            <h1 className=' hero-title font-bold'>ADVENTURE</h1>
            <p className='max-w-[850px] mx-auto'>Proident dolor aliqua velit ad do elit ea veniam eu duis minim incididunt. Id esse laboris aliquip est ex aliqua ullamco lorem ex sunt anim. Pariatur cupidatat eu elit elit. Magna cillum deserunt cupidatat quis fugiat incididunt.</p>
        </div> */}

        <div className=' h-[100vh] w-full absolute overflow-hidden'>
        <video  autoPlay muted loop src="https://www.radiustheme.com/demo/wordpress/themes/tripfery/wp-content/uploads/2024/01/activity_video_bg.mp4" className='absolute h-full  w-full object-cover top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' ></video>

        <div className=' text-white absolute z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '>
        <p className='font-italic-font  font-semibold  md:text-4xl'>Explore New Activity</p>
            <h1 className=' hero-title font-bold'>ADVENTURE</h1>
            <p className='max-w-[850px] mx-auto'>Proident dolor aliqua velit ad do elit ea veniam eu duis minim incididunt. Id esse laboris aliquip est ex aliqua ullamco lorem ex sunt anim. Pariatur cupidatat eu elit elit. Magna cillum deserunt cupidatat quis fugiat incididunt.</p>
        </div>
        </div>
    </section>
  )
}

export default HeroSection