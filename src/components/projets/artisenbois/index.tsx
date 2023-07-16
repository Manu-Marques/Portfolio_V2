import './styles.css';
import logo from '../../../assets/artisenbois.jpg';
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

    function toggle() {
        setProject(project === 'coming' ? '' : 'coming');
    }

    return (
        <div className="artisenbois">
            {ProjetsData.map((info) => (
            <div key={info.artisenbois.id}>
                <><h1 className='artisenbois-title'>{info.artisenbois.title}</h1>
                    <div className="artisenbois-container">
                        <div className="artisenbois-container-img">
                            <img className='artisenbois-img' src={logo} alt="logo">
                            </img>
                        </div>
                        <div className="artisenbois-info">
                            <h2 className="artisenbois-subtitle">Résumé du projet</h2>
                            <p className="artisenbois-text">{info.artisenbois.description}</p>
                            <div className="artisenbois-description">
                                <h2 className="artisenbois-subtitle">Outils utilisés</h2>
                                <ul className="artisenbois-list">
                                    <li className="artisenbois-item">Design <span className="artisenbois-word">{info.artisenbois.stack}</span></li>
                                    <li className="artisenbois-item">Langage <span className="artisenbois-word">{info.artisenbois.stack_1}</span></li>
                                    <li className="artisenbois-item">Framework <span className="artisenbois-word">{info.artisenbois.stack_2}</span></li>
                                    <li className="artisenbois-item">Responsive <span className="artisenbois-word">{info.artisenbois.stack_3}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="artisenbois-visite">
                        <Link to={info.artisenbois.link} target="_blank"  className="artisenbois-link">Visiter le site</Link>
                        <button className="artisenbois-button" onClick={() => scrollToContent('rework')}>Changements Avant/Après</button>
                    </div>
                    <div className="artisenbois-rework" id='contenu'>
                        {project === 'rework' && (
                            <div className="artisenbois-rework-container">
                                <>
                                    <div className="artisenbois-rework-info">
                                        <div className="artisenbois-rework-cross">
                                            <button className="artisenbois-rework-cross-btn" onClick={toggle}>X</button>
                                        </div>
                                        <div className="artisenbois-rework-description">
                                            <ul className="artisenbois-rework-list">
                                                <li className="artisenbois-rework-item"><span className="artisenbois-rework-word">Réduction des composants</span> : Diminution de moitié du nombre de composants nécessaires pour le projet, ce qui simplifie la structure globale et rend le code plus concis et maintenable.</li>
                                                <li className="artisenbois-rework-item"><span className="artisenbois-rework-word">Routes dynamiques</span> : Utilisation de routes dynamiques pour gérer le rendu des différents contenus du projet, ce qui réduit le nombre de routes nécessaires et facilite l'ajout ou la modification de nouvelles fonctionnalités.</li>
                                                <li className="artisenbois-rework-item"><span className="artisenbois-rework-word">Optimisation et légèreté</span> : Réduction de la taille et de la complexité du projet, ce qui le rend plus léger et plus performant. L'optimisation permet également d'améliorer les temps de chargement et l'expérience utilisateur.</li>
                                                <li className="artisenbois-rework-item"><span className="artisenbois-rework-word">Facilité d'optimisation</span> : La simplification du projet rend l'optimisation plus facile et plus efficace. Avec une structure plus claire et moins de dépendances, il est plus simple d'identifier les zones d'amélioration et d'appliquer des optimisations ciblées.</li>
                                            </ul>
                                        </div>
                                    </div></>
                            </div>
                        )}
                    </div>
                </>
            </div>
            ))}
        </div>
    );
}