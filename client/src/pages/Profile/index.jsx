import BookingHistory from "@/components/ProfilePageComponents/BookingHistory";
import ProfileHeading from "@/components/ProfilePageComponents/ProfileHeading";
import ProfileTabButtons from "@/components/ProfilePageComponents/ProfileTabButtons";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./index.scss";
import AccountSetting from "@/components/ProfilePageComponents/AccountSettings";
import { useGetMe } from "@/hooks/UserHooks";
import ManagePassowrd from "@/components/ProfilePageComponents/ManagePassword";
import Loader from "@/components/commonComponents/Loader";

const Profile = () => {
  const [toggle, setToggle] = useState("1");

  const handleToggle = (id) => {
    setToggle(id);
  };

  const { data, isLoading, error } = useGetMe();

  if (isLoading) return <Loader />;

  console.log("profile get me ", data);

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>

      <section
        id="profile-page"
        className=" wrapper my-24 space-y-6 bg-[url('https://jannataresort.com/_nuxt/img/a109df5.png')]"
      >
        <ProfileHeading
          profilImage={data?.avatar}
          userName={data?.userName}
          // phoneNumber='+00 123 456 789'
          email={data?.email}
        />

        <ProfileTabButtons toggle={toggle} handleToggle={handleToggle} />
        <AccountSetting className={toggle === "1" ? " block" : " hidden"} />
        <ManagePassowrd className={toggle === "2" ? " block" : " hidden"} />
        <BookingHistory className={toggle === "3" ? " block" : " hidden"} />
      </section>
    </>
  );
};

export default Profile;
