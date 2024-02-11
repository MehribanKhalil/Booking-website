import BookingHistory from "@/components/ProfilePageComponents/BookingHistory";
import ProfileHeading from "@/components/ProfilePageComponents/ProfileHeading";
import ProfileTabButtons from "@/components/ProfilePageComponents/ProfileTabButtons";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import './index.scss'
import AccountSetting from "@/components/ProfilePageComponents/AccountSettings";

const Profile = () => {
    const [toggle, setToggle] = useState('1')

    const handleToggle=(id)=>{
        setToggle(id)
    }

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>

      <section id="profile-page" className=" wrapper my-24 space-y-6 bg-[url('https://jannataresort.com/_nuxt/img/a109df5.png')]">
            <ProfileHeading 
            profilImage='https://andit.co/projects/html/and-tour/demo/assets/img/common/dashboard-user.png' 
            userName='Sherlyn Chopra'
            phoneNumber='+00 123 456 789'
            email='sherlyn@domain.com'
            />
            
            <ProfileTabButtons toggle={toggle} handleToggle={handleToggle} />
            <AccountSetting className={ toggle==='1' ? ' block' : ' hidden'} />
            <BookingHistory className={ toggle==='2' ? ' block' : ' hidden'} />

      </section>
    </>
  );
};

export default Profile;
