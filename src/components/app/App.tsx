import "./App.css";

//Components
import Projets from "../projets";
import Skills from "../skills";
import Experience from "../experience";
import Formations from "../formations";
import Prestation from "../prestation";
import Contact from "../contact";
import Footer from "../footer";
import ScrollToTop from "../scrollToTop";
import Arrow from "../arrow";

//Images
import photo from '../../../src/assets/Moi.jpg';

//React
import { Link as ScrollLink, Element } from 'react-scroll';
import { useState, useEffect } from "react";


export default function App() {

  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  useEffect(() => {
    if (isMobile) {
      const closeNav = document.getElementById('close-nav');
      if (closeNav) {
        closeNav.click();
      }
    }
  }, [isMobile]);


  return (
    <div className="App">
      <div className="home">
        <div className='home-container'>
          <button className={`hamburger-btn ${isMobile ? 'menu-open' : ''}`} onClick={toggleMenu}>
            <span className="burger-bar"></span>
          </button>
          <div className={`home-items ${isMobile ? 'menu-open' : ''}`} id="close-nav">
            <ScrollLink onClick={() => setIsMobile(false)} className="home-experience" to="experience" spy={true} smooth={true} offset={-50} duration={500}>
              <div className="home-category">Expériences</div>
            </ScrollLink>
            <ScrollLink onClick={() => setIsMobile(false)} className="home-skills" to="skills" spy={true} smooth={true} offset={-50} duration={500}>
              <div className="home-category">Compétences</div>
            </ScrollLink>
            <ScrollLink onClick={() => setIsMobile(false)} className="home-prestation" to="prestation" spy={true} smooth={true} offset={-50} duration={500}>
              <div className="home-category">Prestations</div>
            </ScrollLink>
            <ScrollLink onClick={() => setIsMobile(false)} className="home-projets" to="projets" spy={true} smooth={true} offset={-50} duration={500}>
              <div className="home-category">Projets</div>
            </ScrollLink>
            <ScrollLink onClick={() => setIsMobile(false)} className="home-formations" to="formations" spy={true} smooth={true} offset={-50} duration={500}>
              <div className="home-category">Formations</div>
            </ScrollLink>
            <ScrollLink onClick={() => setIsMobile(false)} className="home-contact" to="contact" spy={true} smooth={true} offset={-50} duration={500}>
              <div className="home-category">Contact</div>
            </ScrollLink>
          </div>
          <div className='home-resume'>
            <div className="home-image">
              <img className='home-img' src={photo} alt="moi" />
            </div>
            <div className="home-me">
              <h2 className='home-presentation'>Bonjour, je m'appelle <span className="presentation-word">Emanuel</span></h2>
              <h2 className='home-presentation'>Je suis un <span className="presentation-word">Développeur Web</span> qui aspire constamment à monter en compétences et à relever de nouveaux défis. </h2>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Element name="projets">
        <Projets />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="formations">
        <Formations />
      </Element>
      <Element name="prestation">
        <Prestation />
      </Element>
      <Arrow />
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}
