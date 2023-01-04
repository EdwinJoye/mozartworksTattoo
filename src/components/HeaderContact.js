import "../css/Header.css";
import { Link } from "react-router-dom";
import Signature from "../img/signatureNewBlack.jpg";

const HeaderContact = () => {
  return (
    <div className="boxEnsembleHeader">
      <div className="divContactHeader"></div>
      <div className="divSignatureContactWorkAboutHeader">
        <div>
          <Link to="/">
            <img className="signatureHeader" src={Signature} alt="" />
          </Link>
        </div>
        <div className="boxHomeContactGalleryAbout">
          <Link to="/categories">
            <div className="from-center btn">Work</div>
          </Link>
          <Link to="/about">
            <div className="btn from-center">About</div>
          </Link>
          <Link to="/contact">
            <div className="headerIn from-center">Contact</div>
          </Link>
        </div>
      </div>
      <div className="divContactHeader"></div>
    </div>
  );
};
export default HeaderContact;
