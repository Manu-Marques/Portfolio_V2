import './styles.css'
import Artisenbois from './artisenbois';
import Todolist from './todolist';
import PokemonFinder from './pokemonFinder';
import { useState, useEffect, useRef } from 'react';
import ProjetsData from "../../../src/data/projects.json";


export default function Projets() {
    const [project, setProject] = useState('artisenbois');

    const handleProject = (project: string) => {
        setProject(project);
    }

    const myRef = useRef(null);
    const [isVisible, setVisible] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0];
            setVisible(entry.isIntersecting);
        });
        if (myRef.current) {
            observer.observe(myRef.current);
        }
    }, []);

    return (
        <div ref={myRef} className={`projets-main ${isVisible ? 'active' : ''}`} id="projets">
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