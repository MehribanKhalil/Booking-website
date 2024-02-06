import React from "react";
import { Link } from "react-router-dom";

const ContactDetails = () => {
  return (
    <div className=" contact-details">
      <h3 className=" text-2xl py-4 font-semibold text-neutral-800">Contact details</h3>
      <div className=" space-y-3 mb-3">
        <h5  className=" font-medium text-gray-500 text-lg">Help line</h5>
        <Link className=" text-mainColor text-xl font-medium">+01 234 567 890</Link>
      </div>

      <div className=" space-y-3 mb-3">
        <h5 className=" font-medium text-gray-500 text-lg">Support mail</h5>
        <Link className=" text-mainColor text-xl font-medium">support@domain.com</Link>
      </div>

      <div className=" space-y-3 mb-7">
        <h5 className=" font-medium text-gray-500 text-lg">Contact hour</h5>
        <p className=" text-mainColor text-xl font-medium">Mon-Sun : 24 hours</p>
      </div>

      <div className=" w-full h-[280px]">
        <iframe
          width="100%"
          height='100%'
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=baku%20code%20academy+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      </div>
    </div>
  );
};

export default ContactDetails;
