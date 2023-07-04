import './styles.css'
import Artisenbois from './artisenbois';
import Todolist from './todolist';
import PokemonFinder from './pokemonFinder';
import { useState } from 'react';


export default function Projets() {
    const [project, setProject] = useState('artisenbois');
    const [activeTab, setActiveTab] = useState(1);

    const bothFunctions = (project: string, tab: number) => {
        setProject(project);
        setActiveTab(tab);
    }
        

    return (
        <div  className="projets-main " id="projets">
            <h1 className="projets-title">Projets</h1>
            <div className="projets-table">
                <div className="projets-btn">
                    <button className={`btn ${activeTab === 1 ? "on" : ""}`} onClick={() => bothFunctions('artisenbois', (1))}>ArtisenBois</button>
                    <button className={`btn ${activeTab === 2 ? "on" : ""}`}  onClick={() => bothFunctions('todolist', (2))}>ToDoList</button>
                    <button className={`btn ${activeTab === 3 ? "on" : ""}`} onClick={() => bothFunctions('pokemonfinder', (3))}>Pokemon Finder</button>
                </div>
                <div className="projets-contents">
                    {project === 'artisenbois' && <Artisenbois />}
                    {project === 'todolist' && <Todolist />}
                    {project === 'pokemonfinder' && <PokemonFinder />}
                </div>
            </div>
        </div>
    );
}