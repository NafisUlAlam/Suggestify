// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Hero from "./Hero";

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={5000}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={40}
      slidesPerView={1}
      className="bg-banner5 bg-cover bg-no-repeat bg-center grid place-content-center mb-12"
    >
      <SwiperSlide>
        <Hero
          src={
            "https://i.ibb.co.com/bmR56v2/dec912b4-84e8-4c5f-9c57-81c639979844.webp"
          }
          title={"Got Questions? We've Got Answers!"}
          subtitle={
            "Ask anything, explore ideas, and get the insights you need."
          }
        ></Hero>
      </SwiperSlide>
      <SwiperSlide>
        <Hero
          src={
            "https://i.ibb.co.com/qnntHPK/0420af1a-29fd-49a8-a90e-7be1ec83dca6.webp"
          }
          title={"Reliable Replies, Smart Recommendations"}
          subtitle={"Get thoughtful suggestions from a community that cares."}
        ></Hero>
      </SwiperSlide>
      <SwiperSlide>
        <Hero
          src={
            "https://i.ibb.co.com/4YkdhPb/5e2f8743-c682-458c-b195-315ff623c780.webp"
          }
          title={"Authenticity You Can Trust"}
          subtitle={"Verified insights and real recommendations, just for you."}
        ></Hero>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
