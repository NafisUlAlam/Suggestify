// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import slider1 from "../assets/adidas-3.png";
import slider2 from "../assets/slider-3-1.jpg";
import slider3 from "../assets/slider-3.jpg";
import slider4 from "../assets/slider-4-1.jpg";
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
      className="bg-banner3 bg-cover bg-no-repeat bg-center"
    >
      <SwiperSlide>
        <img
          src={slider1}
          className="w-full min-h-[600px] object-contain"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider2}
          className="w-full min-h-[600px] object-contain"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider3}
          className="w-full min-h-[600px] object-contain"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider4}
          className="w-full min-h-[600px] object-contain"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
