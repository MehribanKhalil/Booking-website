import ContactDetails from "@/components/ContactPageComponents/ContactDetails";
import ContactForm from "@/components/ContactPageComponents/ContactForm";
import ContactMap from "@/components/ContactPageComponents/ContactMap";
import PageTitle from "@/components/commonComponents/PageTitle";
import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div id="Contact page" className="">
        <div className="h-[115vh] flex flex-col  lg:flex-row gap-16 items-center">
          <div className="h-full flex py-10 px-1 justify-center items-center bg-[url('https://cozystay.loftocean.com/island-resort/wp-content/uploads/sites/3/2023/05/christian-lambert-vmIWr0NnpCQ-unsplash.jpg')] bg-cover bg-center w-full ">
            <ContactForm />
          </div>
          <div className=" w-full ">
            <ContactDetails />
          </div>
        </div>

        {/* <ContactMap/> */}
      </div>
    </>
  );
};

export default Contact;
