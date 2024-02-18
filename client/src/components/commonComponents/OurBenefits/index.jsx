import React from "react";
import BenefitCard from "./BenefitCard";

const OurBenefits = () => {
  return (
    <section id="our-benefits" className="wrapper section-space grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
     <BenefitCard image='https://cdn-icons-png.flaticon.com/128/701/701348.png' info='Tropical luxury in the Pacific islands with exclusive over-water bungalows' />
     <BenefitCard image='https://cdn-icons-png.flaticon.com/128/2664/2664589.png' info='Wake up each morning to picturesque ocean or lagoon views from every hotel room'/>
     <BenefitCard image='https://cdn-icons-png.flaticon.com/128/259/259973.png' info='All of our bungalows boast sleek bathrooms with soaking tubs, separate showers'/>
     <BenefitCard image='https://cdn-icons-png.flaticon.com/128/751/751621.png' info='Enjoy coffee or cocktails whilst relaxing on your bungalows private deck overlooking'/>
     <BenefitCard image='https://cdn-icons-png.flaticon.com/128/6302/6302489.png' info='Experience authentic Fijian craftsmanship and modern hotel luxuries in our overwater bungalows'/>
     <BenefitCard image='https://cdn-icons-png.flaticon.com/128/2418/2418339.png' info='Upgrade your stay in our Fiji hotel for more spacious accommodation and adjoining rooms'/>
    </section>
  );
};

export default OurBenefits;
