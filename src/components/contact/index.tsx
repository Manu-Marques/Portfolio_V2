import './styles.css';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-left">
                    <div className="contact-icon-envelope">
                        <div className="contact-envelope">
                            <i className="fa fa-envelope fa-2x"></i>
                        </div>
                        <Link to="mailto:le.marques.emanuel@gmail.com" target="_blank">
                            <span className="contact-info">le.marques.emanuel@gmail.com</span>
                        </Link>
                    </div>
                    <div className="contact-icon-phone">
                        <div className="contact-phone">
                            <i className="fa fa-phone fa-2x"></i>
                        </div>
                        <span className="contact-info">+33 665 24 08 60</span>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="contact-icon-linkdin">
                        <div className="contact-linkdin">
                            <i className="fa fa-linkedin fa-2x"></i>
                        </div>
                        <Link to="https://www.linkedin.com/in/emanuel-marques-le/" target="_blank">
                            <span className="contact-info">LinkedIn</span>
                        </Link>
                    </div>
                    <div className="contact-icon-git">
                        <div className="contact-git">
                            <i className="fa fa-github fa-2x"></i>
                        </div>
                        <Link to="https://github.com/Manu-Marques" target="_blank">
                            <span className="contact-info">Github</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}