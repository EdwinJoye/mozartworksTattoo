import "../css/About.css";
import HeaderAbout from "../components/HeaderAbout";
import BoxContacts from "../components/BoxContacts";
import { useState } from "react";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  return (
    <div className="pageAbout">
      <HeaderAbout
        isSelectedPage={selectedPage}
        onClick={() => {
          setSelectedPage(null);
        }}
      ></HeaderAbout>
      <div className="boxEnsembleAbout">
        <div className="boxEnsembleGaucheAbout">
          <BoxContacts></BoxContacts>
        </div>
        <div className="boxEnsembleMilieuAbout">
          <div className="firstBoxDivsAbout">
            <div className="boxGaucheFirstBox">
              <div className="principalTextAbout">
                <h1>About</h1>
                <h2>me</h2>
              </div>
              <div className="boxText1">
                <span className="textAbout">
                  Autodidacte dans le milieu du tatouage, Mozartworks s'inspire
                  de ses études et formations pour réaliser ses œuvres. Après
                  cinq années à dessiner des plans d'architecture, il valide un
                  Master 2 en Histoire culturelle. C'est de ces deux expériences
                  que viennent son intérêt pour l'esthétique des manuscrits et
                  des gravures, ainsi que sa fascination pour les œuvres
                  pointillistes et la précision des détails en général.
                  L'esthétique de la gravure qui, d'ailleurs, était en quelque
                  sorte un manque à combler dans le milieu du tatouage français.
                </span>
                <span className="textAbout2"></span>
              </div>
              <div className="boxText2">
                <span className="textAbout">
                  Touche-à-tout, Mozartworks réalise des dessins pointillistes
                  au stylo, crayon de papier et feutre, mais également des
                  œuvres à l'aquarelle. Concernant la technique du tatouage
                  pure, il revient aux origines de cet art en pratiquant le
                  handpoke qui permet de tatouer plus de détails, mais qui a
                  également un intérêt pratique, à savoir que cette technique
                  est moins douloureuse et cicatrise plus rapidement. De son
                  style ressort l'ésotérisme, mais aussi l'abstraction par des
                  formes géométriques très travaillées.
                </span>
                <span className="textAbout2"></span>
              </div>
            </div>
            <div className="boxDroiteFirstBox"></div>
          </div>
        </div>
        <div className="boxEnsembleGaucheAbout"></div>
      </div>
    </div>
  );
};
export default Home;
