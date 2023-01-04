import "../css/Categories.css";
import HeaderCategories from "../components/HeaderCategories";
import { Link } from "react-router-dom";
import BoxContacts from "../components/BoxContacts";
import { categories } from "../data/categories";
import CarouselCategories from "../components/CarouselCategories";
import Footer from "../components/Footer";

const Categories = () => {
  return (
    <div className="boxEnsembleGallery">
      <HeaderCategories></HeaderCategories>
      <div className="boxMilieuGallery">
        <div className="boxVideGallery">
          <BoxContacts></BoxContacts>
        </div>
        <div className="boxCarouselsTitre">
          <div className="boxTitreGallery">Categories</div>
          <div className="ensembleBoxCategories">
            <div className="boxCarousels">
              {categories.map((category, key) => {
                return (
                  <div key={key}>
                    <div className="titreCarousel">{category.title}</div>
                    <Link to={category.link}>
                      <CarouselCategories urls={category.urls} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="boxVideGallery"></div>
      </div>
      <div className="footerFixed">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default Categories;
