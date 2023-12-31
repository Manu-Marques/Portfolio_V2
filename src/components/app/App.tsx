import "./App.css";

//Components
// import Projets from "../projets";
import Skills from "../skills";
import Experience from "../experience";
// import Prestation from "../prestation";
import Contact from "../contact";
import Recommandations from "../recommandations";
import Footer from "../footer";
import ScrollToTop from "../scrollToTop";
import Arrow from "../arrow";
// import Loader from "../loader";
// import PlaceHolder from "../placeHolder";


//Images
import photo from '../../../src/assets/Moi.png';
import logo from '../../../src/assets/logo.png';
//React
import { Link as ScrollLink, Element } from 'react-scroll';
import { useState, useEffect } from "react";


export default function App() {



  //Loading
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

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
  // const [isPlaceHolder, setIsPlaceHolder] = useState(false);

  // useEffect(() => {
  //   const image = new Image();
  //   image.src = photo;
  //   image.onload = () => {
  //   setIsPlaceHolder(true);
  //   };
  // }, []);

  return (
    <div className="App">
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
                <ScrollLink onClick={() => setIsMobile(false)} className="home-experience" to="experience" spy={true} smooth={true} offset={-50} duration={500}>
                  <div className="home-category">Expériences</div>
                </ScrollLink>
                <ScrollLink onClick={() => setIsMobile(false)} className="home-skills" to="skills" spy={true} smooth={true} offset={-50} duration={500}>
                  <div className="home-category">Compétences</div>
                </ScrollLink>
                {/* <ScrollLink onClick={() => setIsMobile(false)} className="home-prestation" to="prestation" spy={true} smooth={true} offset={-50} duration={500}>
                  <div className="home-category">Prestations</div>
                </ScrollLink> */}
                <ScrollLink onClick={() => setIsMobile(false)} className="home-recommandations" to="recommandations" spy={true} smooth={true} offset={-50} duration={500}>
                  <div className="home-category">Recommandations</div>
                </ScrollLink>
                <div className="home-mobile-logo">
                <img className='home-mobile-img' src={logo} loading="lazy" alt="logo" />
              </div>
              </div>
            </div>
            <div className='home-resume'>
              <div className="home-image">
                <img className='home-img' src={photo} alt="moi" />
                {/* {isPlaceHolder ? (
                ) : (
                  <PlaceHolder width={200} height={150} />
                )} */}
              </div>

                <div className="home-me">
                  <section className="home-presentation">
                    <div>
                      <h1 className="home-hello">Bonjour, je m'appelle</h1>
                    </div>
                    <div>
                      <h1 className="home-name">Emanuel</h1>
                    </div>
                    <div>
                      <h1 className="home-dev">Développeur Front-End React JS</h1>
                    </div>
                    <div>
                      <p className="home-text">J'aspire constamment à monter en compétences et à relever de nouveaux défis.</p>
                    </div>
                    <section className="home-contact-icon">
                      <Contact />
                  </section>
                </section>
            </div>
          </div>
        </div>
        </div>
      <ScrollToTop />
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      {/* <Element name="prestation">
        <Prestation />
      </Element> */}
      <Element name="recommandations">
        <Recommandations />
      </Element>
      <Arrow />
      <Footer /></>
    </div >
  );
}
