import './styles.css';
import logo from '../../../assets/logo.jpg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Artisenbois() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    interface Artisenbois {
        artisenbois: {
            title: string,
            description: string,
            stack: string,
            stack_1: string,
            stack_2: string,
            stack_3: string,
            stack_4: string,
            link: string
        },
    }

    return (
        <div className="artisenbois">
            {data.map((info:Artisenbois) => (
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
                </div><div className="artisenbois-visite">
                        <Link to={info.artisenbois.link} target="_blank" className="artisenbois-link">Visiter le site</Link>
                    </div></>
            ))}
        </div>
    );
}