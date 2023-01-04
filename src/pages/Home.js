import "../css/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__content">
        <img
          className="home__content-img"
          src="https://res.cloudinary.com/dm0sv9nfx/image/upload/v1653413575/mozartWorksTattooPictures/Other%20Pictures/fondOeilBonGood_luwjxa.jpg"
          alt=""
        />
        <video
          className="home__content-video"
          height="80"
          src="https://res.cloudinary.com/dm0sv9nfx/video/upload/v1653399289/mozartWorksTattooPictures/Other%20Pictures/mozart_works_3_bqxry9.mp4"
          type="video/mp4"
          autoPlay="autoplay"
          muted
        ></video>
        <Link className="home__content-btn" to="/categories">
          ENTER
        </Link>
      </div>
    </div>
  );
};
export default Home;
