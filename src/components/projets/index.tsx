import './styles.css';

import Sites from "./site"
import ProjectPerso from "./projects perso";

export default function Project() {

    return (
        <div className="all-projects">
                <ProjectPerso />
                    <Sites />
        </div>
    );
}