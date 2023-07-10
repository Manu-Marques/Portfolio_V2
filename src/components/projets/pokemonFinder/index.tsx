import logo from '../../../assets/pokeball.jpg';
import './styles.css';
import { Link } from 'react-router-dom';
import ProjetsData from "../../../../src/data/projects.json";


export default function PokemonFinder() {



    return (
        <div className="pokemon">
            {ProjetsData.map((info) => (
                <><h1 className='pokemon-title'>{info.pokemon.title}</h1>
                    <div className="pokemon-container">
                        <div className="pokemon-container-img">
                            <img className='pokemon-img' src={logo} alt="logo">
                            </img>
                        </div>
                        <div className="pokemon-info">
                            <h2 className="pokemon-subtitle">Résumé du projet</h2>
                            <p className="pokemon-text">{info.pokemon.description}</p>
                            <div className="pokemon-description">
                                <h2 className="pokemon-subtitle">Outils de développement utilisés</h2>
                                <ul className="pokemon-list">
                                    <li className="pokemon-item">Design <span className="pokemon-word">{info.pokemon.stack}</span></li>
                                    <li className="pokemon-item">Langage <span className="pokemon-word">{info.pokemon.stack_1}</span></li>
                                    <li className="pokemon-item">Framework <span className="pokemon-word">{info.pokemon.stack_2}</span></li>
                                    <li className="pokemon-item">API <span className="pokemon-word">{info.pokemon.stack_3}</span></li>
                                    <li className="pokemon-item">Tests unitaires <span className="pokemon-word">{info.pokemon.stack_4}</span></li>
                                    <li className="pokemon-item">Responsive avec <span className="pokemon-word">{info.pokemon.stack_5}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div><div className="pokemon-visite">
                        <Link to={info.pokemon.link} target="_blank" className="pokemon-link">Visiter le site</Link>
                    </div></>
            ))}
        </div>
    );
}