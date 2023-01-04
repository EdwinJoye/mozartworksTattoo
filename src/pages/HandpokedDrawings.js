import HeaderTattoosDrawings from "../components/HeaderTattoosDrawings";
import { useState } from "react";
import "../css/TattoosDrawings.css";
import "../css/Test.css";
import Footer from "../components/Footer";
import BoxContacts from "../components/BoxContacts";
import ScrollingMenu from "../components/ScrollingMenu";
import { handpokedDrawingsWorks } from "../data/handpokedDrawingsWorks";
import OverlayCarousel from "../components/OverlayCarousel";

const HandpokedDrawings = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      <HeaderTattoosDrawings></HeaderTattoosDrawings>
      <div className="boxEmptyPictures">
        <div className="emptyDiv">
          <BoxContacts></BoxContacts>
        </div>
        <div className="boxPicturesTitre">
          <div className="boxTitreMenu">
            <div className="ensembleBoxTitre">
              <div className="boxTitre1">Handpoked</div>
              <div className="boxTitre2">Drawings</div>
            </div>
            <div className="divScrollingMenu">
              <ScrollingMenu></ScrollingMenu>
            </div>
          </div>
          <div className="boxEnsemblePictures">
            <div className="boxPictures">
              {handpokedDrawingsWorks.map((work, key) => {
                return (
                  <div key={key}>
                    <OverlayCarousel
                      isSelected={work.id === selectedId}
                      urls={work.zooms}
                      onClick={() => {
                        setSelectedId(null);
                      }}
                    />
                    <div
                      className="image"
                      onClick={() => {
                        setSelectedId(work.id);
                      }}
                    >
                      <img className="imgPortrait" src={work.mainUrl} alt="1" />
                      <div className="imageOverlay">
                        <div className="imageTitle">{work.title}</div>
                        <p className="descriptionImage">{work.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="emptyDiv"></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HandpokedDrawings;
