import "../css/OverlayPictureTitle.css";
import CarouselGallery from "../components/CarouselGallery";

const OverlayCarousel = ({ urls, onClick, isSelected }) => {
  return (
    <div className={`testVisibleOuNon ${isSelected ? "visible" : ""}`}>
      <div className="boxTitleCarouselButton">
        <CarouselGallery onClick={onClick} urls={urls} />
      </div>
    </div>
  );
};
export default OverlayCarousel;
