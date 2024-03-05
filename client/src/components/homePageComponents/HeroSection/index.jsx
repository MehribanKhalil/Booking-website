import React from "react";
import "./index.scss";

const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className=" h-[100vh] w-full absolute overflow-hidden ">
        <video
          autoPlay
          muted
          loop
          src="https://www.radiustheme.com/demo/wordpress/themes/tripfery/wp-content/uploads/2024/01/activity_video_bg.mp4"
          className="absolute h-full  w-full object-cover top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        ></video>
        {/* <img src="https://assets-global.website-files.com/607e99bffc9a6042b332722c/65c241be477691f18e5f7ab7_Indian-Ocean-Nelson-Travel.webp" alt="" /> */}
        <div className=" text-white absolute z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
          <p className="font-italic-font  font-semibold  md:text-4xl">
            Explore New Activity
          </p>
          <h1 className=" hero-title font-bold">ADVENTURE</h1>
          <p className="max-w-[850px] mx-auto">
            Proident dolor aliqua velit ad do elit ea veniam eu duis minim
            incididunt. Id esse laboris aliquip est ex aliqua ullamco lorem ex
            sunt anim. Pariatur cupidatat eu elit elit. Magna cillum deserunt
            cupidatat quis fugiat incididunt.
          </p>
          
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
