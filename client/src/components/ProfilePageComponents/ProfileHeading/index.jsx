import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { LuPencilLine } from "react-icons/lu";

const ProfileHeading = ({ profilImage, userName, email, phoneNumber }) => {
  return (
    <div className="profile-heading border border-gray-100 rounded-lg p-2 ">
      <div className='rounded-lg profile-image relative h-[20vh] bg-[url("https://images.unsplash.com/photo-1603437873662-dc1f44901825?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdWRzfGVufDB8fDB8fHww")] bg-center '>
        <div className="absolute -bottom-4 left-5">
          <img
            className=" border-2  border-white  rounded-full"
            src={profilImage}
            alt="profile-image"
          />

          <button className=" absolute border-white border w-7 h-7 flex justify-center items-center bg-white text-gray-500 rounded-xl top-0 right-0 ">
            <LuPencilLine />
          </button>
        </div>
      </div>

      <div className=" space-y-3 px-1 py-4">
        <h4 className="user-name text-2xl  font-medium text-gray-600">
          {userName}
        </h4>

        <div className="user-info flex items-center gap-10">
          <p className="user-email flex items-center gap-1 text-lg text-gray-500">
            <MdOutlineEmail /> {email}
          </p>
          <p className="user-phone-number flex items-center gap-1 text-lg text-gray-500">
            <LuPhone /> {phoneNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeading;
