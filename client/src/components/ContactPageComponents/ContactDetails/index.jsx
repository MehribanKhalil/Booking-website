import React from "react";
import { Link } from "react-router-dom";
import ContactDetailInfo from "../ContactDetailsInfo";

const ContactDetails = () => {
  return (
    <div className=" contact-details lg:max-w-[550px]  px-5">
      <h3 className=" text-[14px] text-center  lg:text-start font-semibold text-neutral-800">
        CONTACT INFORMATION
      </h3>
      <h2 className="text-center  lg:text-start text-mainColor text-2xl  md:text-3xl pt-2 ">
        Contact with us to get any any support.
      </h2>

      <div className=" text-neutral-700 space-y-1 text-lg py-6 border-b border-mainColor ">
        <p>572 – 636 Victoria Parade</p>
        <p>P.O. Box 19217</p>
        <p>Suva, Fiji</p>
      </div>
      <div className=" flex   flex-col gap-3 md:gap-32  md:flex-row pt-10 pb-12">
        <ContactDetailInfo
          title="Accommodation"
          phone="+ 679 345 7788"
          email="stay@cozystay.com"
        />

        <ContactDetailInfo
          title="Restaurants"
          phone="+ 679 345 7788"
          email="stay@cozystay.com"
        />
      </div>

      <div className=" flex  flex-col gap-3 md:gap-32 md:flex-row">
        <ContactDetailInfo
          title="Day Spa & Gym"
          phone="+ 679 345 7788"
          email="stay@cozystay.com"
        />

        <ContactDetailInfo
          title="Banquet & Weddings"
          phone="+ 679 345 7788"
          email="stay@cozystay.com"
        />
      </div>
    </div>
  );
};

export default ContactDetails;
