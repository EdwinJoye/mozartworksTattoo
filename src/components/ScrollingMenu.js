import "../css/ScrollingMenu.css";

const ScrollingMenu = () => {
  return (
    <div className="boxMenuDropdown">
      <div className="boxButton dropdown deuzleft">
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

      <div className="boxButton dropdown deuzright">
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

      <a href="/pictures" className="boxButton dropdown deuzleft">
        <button className="dropbtn2">Pictures</button>
      </a>
    </div>
  );
};
export default ScrollingMenu;
