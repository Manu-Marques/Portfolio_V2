import "./App.css";

//Components
import Projets from "../projets";
import Skills from "../skills";
import Experience from "../experience";
import Formations from "../formations";
import Contact from "../contact";
import Footer from "../footer";
import ScrollToTop from "../scrollToTop";
import Arrow from "../arrow";

//Images
import photo from '../../../src/assets/photo.jpg';

//React
// import { HashLink as Link } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function App() {

  
  return (
    <div className="App">
      <div className="home">
        <div className='home-container'>
          <div className="home-row">
            <div className='home-resume'>
              <div className="home-me">
                <h2 className='home-presentation'>Bonjour, je m'appelle <span className="presentation-word">Emanuel</span></h2>
                <h2 className='home-presentation'>Je suis <span className="presentation-word">Développeur Web</span></h2>
              </div>
              <img className='home-img' src={photo} alt="moi" />
            </div>
            <div className="home-menu">
              <div className="home-left">
                <Link className='home-experience' to='#experience' >
                  <div >Expériences</div>
                </Link>
                <Link className='home-skills' to="#skills" >
                  <div >Compétences</div>
                </Link>
              </div>
              <div className="home-right">
                <Link className='home-projets' to="#projets" >
                  <div>Projets</div>
                </Link>
                <Link className='home-formations' to="#formations" >
                  <div>Formations</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Projets />
      <Skills />
      <Experience />
      <Formations />
      <Arrow />
      <Contact />
      <Footer />
    </div>
  );
}
