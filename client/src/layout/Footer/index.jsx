import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="">
      <div className="footer-top bg-[#F3F6FD] wrapper   section-space grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
        <div className=" mb-3">
          <h3>Need any help?</h3>
          <div className="space-y-5">
            <div className=" border-l-2 border-mainColor px-3">
              <div className=" space-y-2">
                <h6 className=" font-medium">Call 24/7 for any help</h6>
                <Link className="text-xl text-mainColor font-semibold">+00 123 456 789</Link>
              </div>
            </div>
            <div className=" border-l-2 border-mainColor px-3">
              <div>
                <h6 className=" font-medium">Mail to our support team</h6>
                <Link className="text-xl text-mainColor font-semibold">support@domain.com</Link>
              </div>
            </div>
            <div className=" border-l-2 border-mainColor px-3">
              <div>
                <h6 className=" font-medium">Follow us on</h6>
                <div className=" flex gap-2 text-mainColor text-xl">
                  <button>
                    <i className="fa-brands fa-square-facebook"></i>
                  </button>
                  <button>
                    <i className="fa-brands fa-square-twitter"></i>
                  </button>
                  <button>
                    <i className="fa-brands fa-instagram"></i>
                  </button>
                  <button>
                    <i className="fa-brands fa-linkedin"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mb-3">
          <h3>Company</h3>
          <ul className="space-y-3">
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Rewards</li>
            <li>Work with Us</li>
            <li>Meet the Team</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className=" mb-3">
          <h3>Support</h3>
          <ul className="space-y-3">
            <li>Account</li>
            <li>Faq</li>
            <li>Legal</li>
            <li>Contact</li>
            <li>Affiliate Program</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className=" mb-3">
          <h3>Other Services</h3>
          <ul className="space-y-3">
            <li>Community program</li>
            <li>Investor Relations</li>
            <li>Rewards Program</li>
            <li>PointsPLUS</li>
            <li>Partners</li>
            <li>List My Hotel</li>
          </ul>
        </div>

        <div className=" mb-3">
          <h3>Top cities</h3>
          <ul className="space-y-3">
            <li>Chicago</li>
            <li>New York</li>
            <li>San Francisco</li>
            <li>California</li>
            <li>Ohio</li>
            <li>Alaska</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom flex-col gap-4 items-center py-4 border-t border-gray-500 justify-center sm:flex-row flex sm:justify-between wrapper">
        <p className=" font-medium">Copyright © 2024 All Rights Reserved</p>
        <div>
          <img
            src="https://www.radiustheme.com/demo/wordpress/themes/tripfery/wp-content/uploads/2023/10/payment-image.png"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
