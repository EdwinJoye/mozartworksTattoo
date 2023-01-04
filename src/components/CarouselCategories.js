import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "../css/CarouselsCategories.css";

const CarouselCategories = ({ urls }) => {
  return (
    <div className="carousel">
      <Swiper
        autoplay={{
          delay: 4000,
        }}
        loop={true}
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        speed={900}
      >
        {urls.map((url, key) => {
          return (
            <SwiperSlide key={key}>
              <img className="boxCarousel1" src={url} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default CarouselCategories;
