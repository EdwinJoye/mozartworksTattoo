import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import Croix from "../img/svgLogos/croixBlanche.svg";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/CarouselsGallery.css";

const CarouselGallery = ({ onClick, urls }) => {
  return (
    <div className="boxCarousel">
      <img
        className="croixCarouselOverlay"
        onClick={() => onClick()}
        src={Croix}
        alt="croix"
      />
      <Swiper
        autoplay={{
          delay: 4000,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
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
export default CarouselGallery;
