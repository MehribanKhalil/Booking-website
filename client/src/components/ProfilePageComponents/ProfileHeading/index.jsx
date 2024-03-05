import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { LuPencilLine } from "react-icons/lu";
import { useChangeAvatar } from "@/hooks/UseChangeAvatar";

const ProfileHeading = ({ profilImage, userName, email }) => {
  const { mutate } = useChangeAvatar();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);

    if (event.target.files[0]) {
      const formData = new FormData();
      formData.append("avatar", event.target.files[0]);
      mutate(formData);
    }
  };

  console.log(selectedFile);
  return (
    <div className="profile-heading  border-gray-300  p-2 ">
      <div className='rou profile-image relative h-[35vh] bg-[url("https://images.unsplash.com/photo-1578723189656-d7000d3a2976?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]  bg-cover bg-center '>
        <div className="absolute -bottom-4 left-5">
          <form>
            <label htmlFor="avatar-upload">
              <img
                className=" border-2  border-white  bg-white rounded-full w-[100px] h-[100px] object-contain"
                src={profilImage}
                name="avatar"
                alt="profile-image"
              />
            </label>
            <input
              placeholder="salam"
              type="file"
              id="avatar-upload"
              style={{ display: "none" }}
              onChange={handleFileChange}
              name="avatar"
            />

            {/* <button type="file" className=" absolute border-white border w-7 h-7 flex justify-center items-center bg-white text-gray-500 rounded-xl top-0 right-0 ">
              <LuPencilLine />
            </button> */}
          </form>
        </div>
      </div>

      <div className=" space-y-3 px-4 py-4">
        <h4 className="user-name text-xl  font-medium text-gray-600">
          {userName}
        </h4>

        <div className="user-info flex items-center gap-10 ">
          <p className="user-email flex items-center gap-1 text-lg text-gray-500">
            <MdOutlineEmail /> {email}
          </p>
          {/* <p className="user-phone-number flex items-center gap-1 text-lg text-gray-500">
            <LuPhone /> {phoneNumber}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeading;
