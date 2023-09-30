// Import React
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

//Import data
import ProjetsData from "../../../../src/data/projects.json";
import { Project } from '../../types/types';

//Import style
import './styles.css';

const basePathToImages = '/images/';

export default function ProjectPerso() {
    const handleVisibilityChange = (_inView: boolean, _right: any) => { };

    const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
    const [isClosing, setIsClosing] = useState(false);


    const handleImageClick = (projectId: number) => {
        setSelectedImageId(projectId);
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsClosing(true);

        setTimeout(() => {
            setSelectedImageId(null);
            setIsPopupVisible(false);
            setIsClosing(false);
        }, 300);
    };


    return (
        <div className='container'>
            <div className="container-project">
                <h1 className="container-title">Projets Perso</h1>
                <div className='grid-container'>
                    {ProjetsData.map((project: Project) => (
                        <Fade
                            delay={300}
                            key={project.id}
                            direction="left"
                            onVisibilityChange={handleVisibilityChange}
                        >
                            <div className="image-container">
                                <div
                                    className={`image-content ${selectedImageId === project.id ? 'selected' : ''}`}
                                    onClick={() => handleImageClick(project.id)}
                                >
                                    <img
                                        className="image-img "
                                        src={basePathToImages + project.image}
                                        alt={`Image ${project.id}`}
                                    />
                                    <h1 className="image-title">{project.title}</h1>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
            {isPopupVisible && (
                <div className={`popup-container ${isClosing ? 'closing' : ''}`}>
                    <div className="popup-content">
                        <button className="popup-close" onClick={closePopup}>
                            X
                        </button>
                        {selectedImageId !== null && (
                            <div className="details-container">
                                <h2 className="details-title">
                                    {ProjetsData[selectedImageId - 1].title}
                                </h2>
                                <div className="details-description">
                                    <div className="details-subtitle">
                                        <h3 className="details-description-subtitle">Description</h3>
                                    </div>
                                    <div className="details-description-text">
                                        <p className='details-text-description'>{ProjetsData[selectedImageId - 1].description}</p>
                                    </div>
                                </div>
                                <div className="details-outils">
                                    <div className="details-subtitle">
                                        <h3 className="details-outils-subtitle">
                                            Outils
                                        </h3>
                                    </div>
                                    <div className="details-outils-stack">
                                        <p className='details-text'>{ProjetsData[selectedImageId - 1].stack}</p>
                                        <p className='details-text'>{ProjetsData[selectedImageId - 1].stack_1}</p>
                                        <p className='details-text'>{ProjetsData[selectedImageId - 1].stack_2}</p>
                                        <p className='details-text'>{ProjetsData[selectedImageId - 1].stack_3}</p>
                                    </div>
                                </div>
                                <Link
                                    to={ProjetsData[selectedImageId - 1].link}
                                    target="_blank"
                                    className="details-link"
                                >
                                    Visiter le site
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
