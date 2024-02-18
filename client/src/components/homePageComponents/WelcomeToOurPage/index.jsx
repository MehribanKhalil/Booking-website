import React from "react";

const WelcomeToOurPage = ({title,subtitle,info}) => {
  return (
    <section id="Welcome-our-page" className="wrapper section-space text-center">
      <div className=" max-w-[900px] mx-auto space-y-5 pt-10">
        <h3 className=" text-sm text-mainColor">{title}</h3>
        <h2 className="text-xl md:text-3xl xl:text-4xl">{subtitle}</h2>
        <p className=" text-neutral-700">
           {info}
        </p>
      </div>
    </section>
  );
};

export default WelcomeToOurPage;
