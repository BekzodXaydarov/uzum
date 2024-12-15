import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Banner.css";
import Banner1 from "../../Img/banner1.jpg"
import Banner2 from "../../Img/banner2.jpg"
import Banner3 from "../../Img/banner3.jpg"
import Banner4 from "../../Img/banner4.jpg"

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-wrapper">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "contain",
                }}
                src={Banner1}
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "contain",
                }}
                src={Banner2}
                alt="Slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "contain",
                }}
                src={Banner3}
                alt="Slide 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "contain",
                }}
                src={Banner4}
                alt="Slide 4"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
