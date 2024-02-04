import React from "react";
import './index.scss'

const Footer = () => {
  return (
    <footer id="footer" className="">
      <div className="footer-top bg-[#F3F6FD] wrapper  section-space grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
        <div className=" mb-3">
          <h3>Need any help?</h3>
          <ul className="space-y-3">
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
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
      <div className="footer-bottom"></div>
    </footer>
  );
};

export default Footer;
