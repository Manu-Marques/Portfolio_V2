import logo from '../../../assets/todolist.png';
import './styles.css';
import { Link } from 'react-router-dom';
import ProjetsData from "../../../../src/data/projects.json";


export default function Todolist() {


    return (
        <div className="todolist">
            {ProjetsData.map((info) => (
                <><h1 className='todolist-title'>{info.todolist.title}</h1>
                <div className="todolist-container">
                    <div className="todolist-container-img">
                        <img className='todolist-img' src={logo} alt="logo">
                        </img>
                    </div>
                    <div className="todolist-info">
                        <h2 className="todolist-subtitle">Résumé du projet</h2>
                        <p className="todolist-text">{info.todolist.description}</p>
                        <div className="todolist-description">
                            <h2 className="todolist-subtitle">Outils utilisés</h2>
                            <ul className="todolist-list">
                                <li className="todolist-item">Design <span className="todolist-word">{info.todolist.stack}</span></li>
                                <li className="todolist-item">Langage <span className="todolist-word">{info.todolist.stack_1}</span></li>
                                <li className="todolist-item">Méthode <span className="todolist-word">{info.todolist.stack_2}</span></li>
                                <li className="todolist-item">Responsive <span className="todolist-word">{info.todolist.stack_3}</span></li>
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