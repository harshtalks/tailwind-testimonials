// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slider from "./Slider";
import { data } from "../assets/Data";

const Sliders = () => {
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        1080: {
          slidesPerView: 3,
        },
      }}
      // install Swiper modules
      style={{
        marginBottom: "1rem",
        padding: "2rem",
      }}
      modules={[Navigation]}
      spaceBetween={20}
      centeredSlides={false}
      navigation={true}
      pagination={{ clickable: true, progressbarFillClass: "bg-teal-900" }}
    >
      {data.map((el) => (
        <SwiperSlide
          key={el.id}
          style={{ display: "flex", justifyContent: "center", gap: "1em" }}
        >
          <Slider data={el} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Sliders;
