import React from "react";

const ContactDetailInfo = ({ title, phone, email }) => {
  return (
    <div className="contact-detail-info">
      <h4 className=" text-xl text-mainColor py-2">{title}</h4>
      <p className="phone-info flex text-gray-500 font-medium ">Enquiries & Bookings</p>
      <div className="phone-info flex text-gray-500 font-medium">
        <p className=" phone-info flex ">Phone:</p> 
        <p>{phone}</p>
      </div>
      <div className="email-info flex text-gray-500 font-medium">
        <p className=" phone-info flex  ">Email:</p> 
        <p className="phone-info flex ">{email}</p>
      </div>
    </div>
  );
};

export default ContactDetailInfo;
