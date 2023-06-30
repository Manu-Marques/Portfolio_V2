import logo from '../../../assets/todolist.png';
import './styles.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Todolist() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    interface Todolist {
        todolist: {
            title: string,
            description: string,
            stack: string,
            stack_1: string,
            stack_2: string,
            stack_3: string,
            stack_4: string,
            link: string
        }
    }

    return (
        <div className="todolist">
            {data.map((info: Todolist) => (
                <><h1 className='todolist-title'>{info.todolist.title}</h1><div className="todolist-container">
                    <div className="todolist-container-img">
                        <img className='todolist-img' src={logo} alt="logo">
                        </img>
                    </div>
                    <div className="todolist-info">
                        <h2 className="todolist-subtitle">Résumé du projet</h2>
                        <p className="todolist-text">{info.todolist.description}</p>
                        <div className="todolist-description">
                            <h2 className="todolist-subtitle">Outils de développement utilisés</h2>
                            <ul className="todolist-list">
                                <li className="todolist-item">Design <span className="todolist-word">{info.todolist.stack}</span></li>
                                <li className="todolist-item">Langage <span className="todolist-word">{info.todolist.stack_1}</span></li>
                                <li className="todolist-item">Utilisation de la méthode <span className="todolist-word">{info.todolist.stack_2}</span></li>
                                <li className="todolist-item">Deploiement avec <span className="todolist-word">{info.todolist.stack_3}</span></li>
                                <li className="todolist-item">Responsive avec <span className="todolist-word">{info.todolist.stack_4}</span></li>
                            </ul>
                        </div>
                    </div>
                </div><div className="todolist-visite">
                        <Link to={info.todolist.link} target="_blank" className="todolist-link">Visiter le site</Link>
                    </div></>
            ))}
        </div>
    );
}