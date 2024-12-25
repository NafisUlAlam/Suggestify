// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import slider1 from "../assets/question.png";
import slider2 from "../assets/lookingforanswer.png";
import slider3 from "../assets/confused-bov.png";
import slider4 from "../assets/approved.png";
import "swiper/css/autoplay"; // Import autoplay styles
import { Autoplay } from "swiper/modules";
const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={5000}
      spaceBetween={10}
      slidesPerView={1}
      className="bg-banner5 bg-cover bg-no-repeat bg-center h-[650px]"
    >
      <SwiperSlide>
        <img src={slider1} className="w-full h-[600px] object-contain" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} className="w-full h-[600px] object-contain" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} className="w-full h-[600px] object-contain" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid min-h-[600px] place-items-center">
          <img src={slider4} className="w-full object-contain" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
