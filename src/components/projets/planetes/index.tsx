import logo from '../../../assets/planetes.jpg';
import './styles.css'
import { Link } from 'react-router-dom';
import ProjetsData from "../../../data/projects.json";

export default function Planetes() {
    return (
        <div className="planetes">
            {ProjetsData.map((info) => (
                <><h1 className='planetes-title'>{info.planetes.title}</h1>
                    <div className="planetes-container">
                        <div className="planetes-container-img">
                            <img className='planetes-img' src={logo} alt="logo">
                            </img>
                        </div>
                        <div className="planetes-info">
                            <h2 className="planetes-subtitle">Résumé du projet</h2>
                            <p className="planetes-text">{info.planetes.description}</p>
                            <div className="planetes-description">
                                <h2 className="planetes-subtitle">Outils de développement utilisés</h2>
                                <ul className="planetes-list">
                                    <li className="planetes-item">Design <span className="planetes-word">{info.planetes.stack}</span></li>
                                    <li className="planetes-item">Langage <span className="planetes-word">{info.planetes.stack_1}</span></li>
                                    <li className="planetes-item">Framework <span className="planetes-word">{info.planetes.stack_2}</span> et <span className='planetes-word'>{info.planetes.stack_3}</span></li>
                                    <li className="planetes-item">Deploiement avec <span className="planetes-word">{info.planetes.stack_4}</span></li>
                                    <li className="planetes-item">Responsive avec <span className="planetes-word">{info.planetes.stack_5}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="planetes-visite">
                        <Link to={info.planetes.link} target="_blank" className="planetes-link">Visiter le projet</Link>
                    </div></>
            ))}
        </div>
    );
}
