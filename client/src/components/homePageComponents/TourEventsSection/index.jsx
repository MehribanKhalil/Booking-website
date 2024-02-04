import React from "react";
import SectionTitle from "../../commonComponents/SectionTitle";
import TourCard from "@/components/commonComponents/ToutCard";

const TourEventsSection = () => {
  return (
    <section id="tour-events" className=" wrapper section-space">
      <SectionTitle
        title="Tour events for you"
        subtitle="Nostrud aliqua ipsum dolore velit labore nulla fugiat."
      />

      <div className=" grid grid-cols-4 gap-6  pt-10">
      <TourCard/>
      <TourCard/>
      <TourCard/>
      <TourCard/>
      </div>

    </section>
  );
};

export default TourEventsSection;
