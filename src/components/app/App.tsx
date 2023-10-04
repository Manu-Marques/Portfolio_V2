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
import Loader from "../loader";
import PlaceHolder from "../placeHolder";

//Images
import photo from '../../../src/assets/Moi.jpg';
import logo from '../../../src/assets/logo.png';
//React
import { Link as ScrollLink, Element } from 'react-scroll';
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";


export default function App() {



  //Loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  //Mobile menu
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



  //Placeholder
  const [isPlaceHolder, setIsPlaceHolder] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = photo;
    image.onload = () => {
      setIsPlaceHolder(true);
    };
  }, []);

  return (
    <div className="App">
      {loading ? <Loader /> : (
        <><div className="home">
          <div className='home-container'>
            <button className={`hamburger-btn ${isMobile ? 'menu-open' : ''}`} onClick={toggleMenu}>
              <span className="burger-bar"></span>
            </button>
            <div className={`home-items ${isMobile ? 'menu-open' : ''}`} id="close-nav">
              <div className="home-logo">
                <img className='home-logo-img' src={logo} loading="lazy" alt="logo" />
              </div>
              <div className="home-nav">
                <ScrollLink onClick={() => setIsMobile(false)} className="home-projets" to="projets" spy={true} smooth={true} offset={-50} duration={500}>
                  <div className="home-category">Sites et Projets</div>
                </ScrollLink>
                <ScrollLink onClick={() => setIsMobile(false)} className="home-experience" to="experience" spy={true} smooth={true} offset={-50} duration={500}>
                  <div className="home-category">Expériences</div>
                </ScrollLink>
                <ScrollLink onClick={() => setIsMobile(false)} className="home-skills" to="skills" spy={true} smooth={true} offset={-50} duration={500}>
                  <div className="home-category">Compétences</div>
                </ScrollLink>
                <ScrollLink onClick={() => setIsMobile(false)} className="home-prestation" to="prestation" spy={true} smooth={true} offset={-50} duration={500}>
                  <div className="home-category">Prestations</div>
                </ScrollLink>
                <ScrollLink onClick={() => setIsMobile(false)} className="home-formations" to="formations" spy={true} smooth={true} offset={-50} duration={500}>
                  <div className="home-category">Formations</div>
                </ScrollLink>
                <ScrollLink onClick={() => setIsMobile(false)} className="home-contact" to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                  <div className="home-category">Contact</div>
                </ScrollLink>
              </div>
            </div>
            <div className='home-resume'>
              <div className="home-image">
                {isPlaceHolder ? (
                  <img className='home-img' src={photo} alt="moi" />
                ) : (
                  <PlaceHolder width={200} height={150} />
                )}
              </div>
              <div className="home-me">
                <TypeAnimation
                  style={{ whiteSpace: 'pre-line', display: 'block' }}
                  sequence={[
                    `Bonjour je m'appel Emanuel\n  
                  Je suis un Développeur Web qui aspire constamment à monter en compétences et à relever de nouveaux défis.`,
                  ]}
                  wrapper="h2"
                  className="home-presentation" />
              </div>
            </div>
          </div>
        </div>
          <ScrollToTop />
          <Element name="projets">
            <Projets />
          </Element>
          <Element name="experience">
            <Experience />
          </Element>
          <Element name="skills">
            <Skills />
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
          <Footer /></>
      )}
    </div>
  );
}
