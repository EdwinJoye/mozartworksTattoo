import "../css/BoxContacts.css";
import { Link } from "react-router-dom";
import Facebook from "../img/svgLogos/svgFacebook.svg";
import Instagram from "../img/svgLogos/svgInstagram.svg";
import Enveloppe from "../img/svgLogos/svgEnveloppe.svg";

const BoxContacts = () => {
  return (
    <div className="boxContact">
      <a
        href="https://www.facebook.com/mozartworks-106126588301376"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img className="svgContactsAbout" src={Facebook} alt="Facebook" />
      </a>
      <a
        href="https://www.instagram.com/mozartworks/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img className="svgContactsAbout2" src={Instagram} alt="Instagram" />
      </a>
      <Link to="/contact">
        <img className="imageEnveloppeAbout" src={Enveloppe} alt="Enveloppe" />
      </Link>
    </div>
  );
};
export default BoxContacts;
