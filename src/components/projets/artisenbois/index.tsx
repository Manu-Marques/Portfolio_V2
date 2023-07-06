import './styles.css';
import logo from '../../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import ProjetsData from "../../../../src/data/projects.json";
import { useState } from 'react';

export default function Artisenbois() {

    const [project, setProject] = useState('artisenbois');

function scrollToContent(project: string) {
  const contenu = document.getElementById('contenu');
  if (contenu) {
    contenu.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
  setProject(project);
}

    return (
        <div className="artisenbois">
            {ProjetsData.map((info) => (
                <><h1 className='artisenbois-title'>{info.artisenbois.title}</h1><div className="artisenbois-container">
                    <div className="artisenbois-container-img">
                        <img className='artisenbois-img' src={logo} alt="logo">
                        </img>
                    </div>
                    <div className="artisenbois-info">
                        <h2 className="artisenbois-subtitle">Résumé du projet</h2>
                        <p className="artisenbois-text">{info.artisenbois.description}</p>
                        <div className="artisenbois-description">
                            <h2 className="artisenbois-subtitle">Outils de développement utilisés</h2>
                            <ul className="artisenbois-list">
                                <li className="artisenbois-item">Design <span className="artisenbois-word">{info.artisenbois.stack}</span></li>
                                <li className="artisenbois-item">Langage <span className="artisenbois-word">{info.artisenbois.stack_1}</span></li>
                                <li className="artisenbois-item">Framework <span className="artisenbois-word">{info.artisenbois.stack_2}</span></li>
                                <li className="artisenbois-item">Deploiement avec <span className="artisenbois-word">{info.artisenbois.stack_3}</span></li>
                                <li className="artisenbois-item">Responsive avec <span className="artisenbois-word">{info.artisenbois.stack_4}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <div className="artisenbois-visite">
                        <Link to={info.artisenbois.link} target="_blank" className="artisenbois-link">Visiter le site</Link>
                        <button className="artisenbois-button" onClick={() => scrollToContent('rework')}>Changements Avant/Après</button>
                    </div>
                    <div className="artisenbois-rework" id='contenu'>
                        {project === 'rework' && (
                            <div className="artisenbois-rework-container">
                                <><div className="artisenbois-rework-container-img">
                                    <img className='artisenbois-rework-img' src={logo} alt="logo">
                                    </img>
                                </div><div className="artisenbois-rework-info">
                                        <h2 className="artisenbois-rework-subtitle">Résumé du projet</h2>
                                        <p className="artisenbois-rework-text">{ }</p>
                                        <div className="artisenbois-rework-description">
                                            <h2 className="artisenbois-rework-subtitle">Outils de développement utilisés</h2>
                                            <ul className="artisenbois-rework-list">
                                                <li className="artisenbois-rework-item">Design <span className="artisenbois-rework-word">{ }</span></li>
                                                <li className="artisenbois-rework-item">Langage <span className="artisenbois-rework-word">{ }</span></li>
                                                <li className="artisenbois-rework-item">Framework <span className="artisenbois-rework-word">{ }</span></li>
                                                <li className="artisenbois-rework-item">Deploiement avec <span className="artisenbois-rework-word">{ }</span></li>
                                                <li className="artisenbois-rework-item">Responsive avec <span className="artisenbois-rework-word">{ }</span></li>
                                            </ul>
                                        </div>
                                    </div></>
                            </div>
                        )}
                    </div>
                </>
            ))}
        </div>
    );
}