import Button from "@/components/commonComponents/Button";
import OurBenefits from "@/components/commonComponents/OurBenefits";
import SectionTitle from "@/components/commonComponents/SectionTitle";
import BlogSection from "@/components/homePageComponents/BlogSection";
import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      <section
        id="about-page"
        className=" overflow-hidden bg-[url('https://jannataresort.com/_nuxt/img/a109df5.png')] wrapper section-space bg-[#F0F0F5]"
      >
        <div className="about-page-header flex flex-col lg:flex-row gap-24 justify-between">
          <div className=" space-y-12 bg-[url('https://jannataresort.com/_nuxt/img/a109df5.png)']">
            <SectionTitle
              subtitle="We Are The World Best Travel Agency Company Since 2000"
              title="About us"
            />

            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className=" text-gray-500  space-y-6 text-lg"
            >
              <p>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr
              </p>

              <p>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr
              </p>
            </div>

            <div data-aos-duration="2000">
              <Button>Find Hotels</Button>
            </div>

           
          </div>

          <div data-aos="fade-up-left" data-aos-duration="2000">
            <img
              src="https://www.radiustheme.com/demo/wordpress/themes/tripfery/wp-content/uploads/2024/01/1-min.webp"
              alt=""
              className=" w-full lg:max-w-[800px] object-cover"
            />
          </div>
        </div>

        <div className="slient-section flex justify-center flex-col items-center mt-32 relative">
          <div data-aos="zoom-in" data-aos-duration="2000" className=" flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1706080300719-01456563064a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" max-w-[800px]  object-cover"
              alt=""
            />
          </div>

          <div data-aos="zoom-in-left" data-aos-duration="2000" className=" bg-white  max-w-[400px]  py-16 px-10 space-y-6  md:absolute -top-10 right-32  ">
            <h2 className=" text-xl md:text-4xl">
              SILENT SOLITUDE <span className=" text-mainColor">HIDEAWAY</span>
            </h2>
            <span className="hidden md:block absolute z-10  -right-12  top-30  h-[2px] w-[300px] bg-mainColor"></span>
            <p className=" text-sm text-gray-400  py-12 max-w-[300px]">
              Immerse yourself in the serenity of our Nyepi package,
              thoughtfully curated for your 3 days and 2 nights retreat in our
              tranquil haven. Priced at IDR 1,800,000++ per night, indulge in
              exclusive inclusions tailored to elevate your experience. Discover
              a new sense of self amidst the silent solitude of our hideaway,
              where tranquility reigns supreme.
            </p>
            <button className=" text-[13px] text-mainColor font-medium border-b border-mainColor pb-3 uppercase">Book now</button>
          </div>
        </div>

        <div className=" mt-16">
          <BlogSection />
        </div>
        
        <OurBenefits/>
       
      </section>
    </>
  );
};

export default About;
