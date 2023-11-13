import './styles.css';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <section className="contact">
                      <Link to="https://github.com/Manu-Marques" target="_blank">
                    <div className="home-contact-info">
                      <div className="contact-git">
                        <i className="fa fa-github fa-2x"></i>
                      </div>
                        <div>
                          <span className="contact-info">Github</span>
                          </div>
                    </div>
                      </Link>
                        <Link to="https://www.linkedin.com/in/emanuel-marques-le/" target="_blank">
                    <div className="home-contact-info">
                        <div className="contact-linkdin">
                            <i className="fa fa-linkedin fa-2x"></i>
                        </div>
                            <div>
                              <span className="contact-info">LinkedIn</span></div>
                    </div>
                        </Link>
                        <Link to="tel:0665240860">
                        </Link>
                        <Link to="mailto:le.marques.emanuel@gmail.com" target="_blank">
                    <div className="home-contact-info">
                        <div className="contact-envelope">
                            <i className="fa fa-envelope fa-2x"></i>
                        </div>
                            <span className="contact-info">le.marques.emanuel@gmail.com</span>
                    </div>
                        </Link>
        </section>
    );
}