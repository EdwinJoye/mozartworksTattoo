import "../css/Footer.css";
import DroitAuteur from "../img/svgLogos/DroitAuteur.png";

const Footer = () => {
  return (
    <div className="boxFooter">
      <div className="emptyDivFooter"></div>
      <div className="centerBoxDiv">
        <img className="imgDroitAuteur" src={DroitAuteur} alt="" />
        <span className="titreFooter">Mozart Works</span>
        <span className="titreFooter">2022</span>
      </div>
      <div className="emptyDivFooter"></div>
    </div>
  );
};
export default Footer;
