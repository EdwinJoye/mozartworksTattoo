import "../css/Test.css";
const Test = () => {
  return (
    <div className="boxMenuDropdown">
      <div className="dropdown deuzleft">
        <button className="dropbtn">Tattoos</button>
        <div className="dropdown-content tailleleft">
          <a className="boxLienButton" href="/handpokedtattoos">
            Handpoked Tattoos
          </a>
          <a className="boxLienButton" href="/engravingtattoos">
            Engraving Tattoos
          </a>
        </div>
      </div>

      <div className="dropdown deuzright">
        <button className="dropbtn">Drawings</button>
        <div className="dropdown-content">
          <a className="boxLienButton" href="/coloreddrawings">
            Colored
          </a>
          <a className="boxLienButton" href="/handpokeddrawings">
            Handpoked
          </a>
          <a className="boxLienButton" href="/engravingdrawings">
            Engraving
          </a>
        </div>
      </div>

      <div className="dropdown deuzleft">
        <button className="dropbtn">Pictures</button>
      </div>
    </div>
  );
};
export default Test;
