import HeaderTattoosDrawings from "../components/HeaderTattoosDrawings";
import { useState } from "react";
import "../css/TattoosDrawings.css";
import "../css/Test.css";
import BoxContacts from "../components/BoxContacts";
import Footer from "../components/Footer";
import ScrollingMenu from "../components/ScrollingMenu";
import OverlayCarousel from "../components/OverlayCarousel";
import { picturesWorks } from "../data/picturesWorks";

const Pictures = () => {
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
              <div className="boxTitre1">Pictures</div>
            </div>
            <div>
              <ScrollingMenu></ScrollingMenu>
            </div>
          </div>
          <div className="ensembleBoxPictures2">
            <div className="boxPictures2">
              {picturesWorks.map((work, key) => {
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
      <div className="footerFixed">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Pictures;
