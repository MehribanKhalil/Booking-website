import ContactDetails from "@/components/ContactPageComponents/ContactDetails";
import ContactForm from "@/components/ContactPageComponents/ContactForm";
import PageTitle from "@/components/commonComponents/PageTitle";
import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div id="Contact page" className=" wrapper section-space">
        <PageTitle title="Contact with us" />
        <h2 className=" text-2xl sm:text-4xl w-full lg:w-4/6  font-medium text-neutral-800 pb-3">
          Do you have any query? Contact with us to get any any support.
        </h2>
        <div className=" flex flex-col md:flex-row gap-10 items-start">
          <div className=" w-full md:w-4/6">
            <ContactForm />
          </div>
          <div className=" w-full md:w-2/6">
            <ContactDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
