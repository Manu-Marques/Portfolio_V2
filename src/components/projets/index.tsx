import './styles.css'
import Artisenbois from './artisenbois';
import Todolist from './todolist';
import PokemonFinder from './pokemonFinder';
import { useState } from 'react';


export default function Projets() {
    const [project, setProject] = useState('artisenbois');

    const handleProject = (project: string) => {
        setProject(project);
    }


    return (
        <div  className="projets-main " id="projets">
            <h1 className="projets-title">Projets</h1>
            <div className="projets-table">
                <div className="projets-btn">
                    <button className="btn" onClick={() => handleProject('artisenbois')}>ArtisenBois</button>
                    <button className="btn" onClick={() => handleProject('todolist')}>ToDoList</button>
                    <button className="btn" onClick={() => handleProject('pokemonfinder')}>Pokemon Finder</button>
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