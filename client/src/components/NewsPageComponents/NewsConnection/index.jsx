import React from "react";
import { Link } from "react-router-dom";
import { TiSocialInstagram } from "react-icons/ti";
import {TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTumbler } from "react-icons/ti";
import { TiSocialVimeo } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

const NewsConnection = () => {
  return (
    <div className="follow-us pt-5 pb-3">
      <h2 className="class-h2 blog-about__h2  border-b-2 border-mainColor font-semibold m-0 pt-5 mb-5 ">FOLLOW US</h2>
      <div className="follow-us__social flex gap-3 text-2xl">
        <Link >
          <span>
            <TiSocialInstagram />
          </span>
        </Link>

        <Link >
          <span>
            <TiSocialTwitter />
          </span>
        </Link>

        <Link >
          <span>
            <TiSocialFacebook />
          </span>
        </Link>

        <Link >
          <span>
            <TiSocialTumbler />
          </span>
        </Link>
        <Link >
          <span>
            <TiSocialVimeo />
          </span>
        </Link>
        <Link >
          <span>
            <TiSocialLinkedin />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NewsConnection;
