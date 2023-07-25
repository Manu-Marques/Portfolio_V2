import logo from '../../../assets/planetes.jpg';
import './styles.css'
import { Link } from 'react-router-dom';
import ProjetsData from "../../../data/projects.json";
import { useState } from 'react';

export default function Planetes() {

    const [project, setProject] = useState('planetes');

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
        <div className="planetes">
            {ProjetsData.map((info) => (
                <><h1 className='planetes-title'>{info.planetes.title}</h1>
                    <div className="planetes-container">
                        <div className="planetes-container-img">
                            <img className='planetes-img' src={logo} alt="logo">
                            </img>
                        </div>
                        <div className="planetes-info">
                            <h2 className="planetes-subtitle">Résumé</h2>
                            <p className="planetes-text">{info.planetes.description}</p>
                            <div className="planetes-description">
                                <h2 className="planetes-subtitle">Outils utilisés</h2>
                                <ul className="planetes-list">
                                    <li className="planetes-item">Design <span className="planetes-word">{info.planetes.stack}</span></li>
                                    <li className="planetes-item">Langage <span className="planetes-word">{info.planetes.stack_1}</span></li>
                                    <li className="planetes-item">Framework <span className="planetes-word">{info.planetes.stack_2}</span> et <span className='planetes-word'>{info.planetes.stack_3}</span></li>
                                    <li className="planetes-item">Deploiement <span className="planetes-word">{info.planetes.stack_4}</span></li>
                                    <li className="planetes-item">Responsive <span className="planetes-word">{info.planetes.stack_5}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="planetes-visite">
                        <Link to={info.planetes.link} target="_blank"  className="planetes-link">Visiter le projet</Link>
                        <button className="planetes-button" onClick={() => scrollToContent('coming')}>Ajouts à venir</button>
                    </div>
                    <div className="planetes-coming" id='contenu'>
                        {project === 'coming' && (
                            <div className="planetes-coming-container">
                                <>
                                    <div className="planetes-coming-info">
                                        <div className="planetes-coming-cross">
                                            <button className="planetes-coming-cross-btn" onClick={toggle}>X</button>
                                        </div>
                                        <div className="planetes-coming-description">
                                            <ul className="planetes-coming-list">
                                                <li className="planetes-coming-item"><span className="planetes-coming-word">Espace compte personnel</span> : Gérez votre compte personnel en toute simplicité. Accédez à un espace dédié où vous pouvez personnaliser vos préférences et effectuer des ajustements selon vos besoins.</li>
                                                <li className="planetes-coming-item"><span className="planetes-coming-word">Abonnement à la newsletter</span> : Un abonnement à la newsletter pour vous tenir informé(e) des derniers faits et découvertes dans l'espace.</li>
                                                <li className="planetes-coming-item"><span className="planetes-coming-word">API complète</span> : Une API comprenant une variété de planètes, de lunes et de leurs caractéristiques. Explorez une multitude d'informations précises et détaillées pour approfondir votre connaissance de l'espace.</li>
                                                <li className="planetes-coming-item"><span className="planetes-coming-word">Fun facts/anecdotes</span> : Profitez d'un mode carrousel captivant qui vous présente des anecdotes fascinantes sur l'espace. Laissez-vous emporter par des faits intéressants et surprenants qui élargiront votre curiosité et enrichiront votre expérience.</li>
                                            </ul>
                                        </div>
                                    </div></>
                            </div>
                        )}
                    </div >
                </>
            ))
            }
        </div >
    );
}
