import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionTitle from "@/components/commonComponents/SectionTitle";
import SimilarRoomCard from "../SimilarRoomCard";
import { useParams } from "react-router-dom";
import { useGetSimilarHotels } from "@/hooks/UseGetHotels";

const SimilarRoomsSection = () => {
  const { id } = useParams();
  const { isLoading, data, error } = useGetSimilarHotels(id);
  console.log("simialrrooms", data);
  console.log(id, "hotelID");

  return (
    <section id="similar-rooms-section" className="section-heading md:px-12 mt-5">
      <h3 className="similar-rooms text-2xl md:text-3xl pb-4">Similar Rooms</h3>

      <div className="hotels mt-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          loop="true"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {data?.length===0 ? <p className=" text-lg  italic font-medium">No similar rooms yet</p> :
          data?.map((similarRoom) => (
            
              <SwiperSlide key={similarRoom._id}>
                <SimilarRoomCard {...similarRoom} />
              </SwiperSlide>
          
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SimilarRoomsSection;
