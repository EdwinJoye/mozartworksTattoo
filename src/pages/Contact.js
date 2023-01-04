import "../css/Contact.css";
import HeaderContact from "../components/HeaderContact";
import BoxContacts from "../components/BoxContacts";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    alert("Votre message a bien été envoyé");
    navigate("/");
  };
  return (
    <div className="pageContact">
      <HeaderContact></HeaderContact>
      <div className="boxEmptyPictures">
        <div className="emptyDiv">
          <BoxContacts></BoxContacts>
        </div>
        <div className="boxPicturesTitre">
          <div className="boxTitreMenu">
            <div className="ensembleBoxTitre">
              <div className="boxTitre1">Contact</div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="boxEnsembleSubmit">
            <div className="boxSubmit">
              <span className="titreBoxMessage">Message</span>
              <div className="boxNomPrenomEmail">
                <input
                  className="inputContact"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="inputContact"
                  type="text"
                  placeholder="First name"
                />
                <input
                  className="inputContact"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <input
                className="inputContactMessage"
                type="text"
                placeholder="Message"
              />
              <button onClick={handleSubmit} className="buttonContactEnvoyer">
                Envoyer
              </button>
            </div>
          </form>
          <div className="boxContactPage"></div>
        </div>
        <div className="emptyDiv"></div>
      </div>
      <div className="footerFixed">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default Contact;
