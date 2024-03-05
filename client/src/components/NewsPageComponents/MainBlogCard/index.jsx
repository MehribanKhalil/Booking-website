import React from "react";
import "./index.scss";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTumbler } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";

const MainBlogCard = ({
  mediaSource,
  mainBlogTitle,
  author,
  tag,
  date,
  mainBlogText,
  mainBlogJob,
}) => {
  const isVideo = mediaSource.endsWith(".mp4");

  return (
    <div>
      <div className="main-blog-card shadow-[0_8px_30px_rgb(0,0,0,0.12)] mb-8 rounded-xl">
        <div className="main-blog-content">
          <div className="main-blog-card__img-div  overflow-hidden">
            {isVideo ? (
              <video className="main-blog-card__img" muted autoPlay loop>
                <source src={mediaSource} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                className="main-blog-card__img   rounded-t-xl overflow-hidden duration-500 h-full  mx-auto"
                src={mediaSource}
                alt=""
              />
            )}
          </div>
          <div className="blog-card-content px-7 py-3">
            <p className=" font-semibold  text-xl py-5  main-blog-card__title cursor-pointer ">
              {mainBlogTitle}
            </p>

            <p className="main-blog-card__desc  italic cursor-pointer font-medium">
              {author} / {tag} / {date}
            </p>

            <p className=" text-gray-500 my-4  line-clamp-4">
              
              {mainBlogText}
            </p>

            <div className=" flex justify-between items-center  main-blog-card__bottom  py-3">
              <div className="main-blog-card__desc">
                <span>{mainBlogJob}</span>
              </div>

              <div className="main-blog-card__icons flex items-center">
                <span className="main-blog-card__desc">Share :</span>
                <Link className="main-blog__icon">
                  <span>
                    <TiSocialFacebook size={20} />
                  </span>
                </Link>
                <Link className="main-blog__icon">
                  <span>
                    <TiSocialTwitter size={20} />
                  </span>
                </Link>
                <Link className="main-blog__icon">
                  <span>
                    <TiSocialLinkedin size={20} />
                  </span>
                </Link>
                <Link className="main-blog__icon">
                  <span>
                    <TiSocialTumbler size={20} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlogCard;
