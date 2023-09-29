//Import React
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

//Import data
import Sites from "../../../../src/data/sites.json"
import { Site } from '../../types/types';

//Import style
import './styles.css';

const basePathToImages = '/images/';

export default function Site() {

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
        <div className="wrapper">
            <div className="container-site">
                <h1 className="site-title">Projets Professionnels</h1>
                {Sites.map((site: Site) => (
                    <Fade
                        key={site.id}
                        direction="right"
                        onVisibilityChange={handleVisibilityChange}
                    >
                        <div className="image-container">
                            <div
                                className={`image-content ${selectedImageId === site.id ? 'selected' : ''}`}
                                onClick={() => handleImageClick(site.id)}
                            >
                                <img
                                    className="image-site"
                                    src={basePathToImages + site.image}
                                    alt={`Image ${site.id}`}
                                />
                                <h1 className="image-title">{site.title}</h1>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
            {isPopupVisible && (
                <div className={`popup-container ${isClosing ? 'closing' : ''}`}>
                    <div className="popup-content">
                        <button className="popup-close" onClick={closePopup}>
                            X
                        </button>
                        {selectedImageId !== null && (
                            <div className="container-details">
                                <h2 className="details-title">{Sites[selectedImageId - 1].title}
                                </h2>
                                <div className="details-container">
                                    <div className="details-description">
                                        <div className="details-subtitle">
                                            <h3 className="details-description-subtitle">Description</h3>
                                        </div>
                                        <div className="details-description-text">
                                            <p className='details-text-description'>{Sites[selectedImageId - 1].description}</p>
                                        </div>
                                    </div>
                                    <div className="details-outils">
                                        <div className="details-subtitle">
                                            <h3 className="details-outils-subtitle">Outils</h3>
                                        </div>
                                        <div className="details-outils-stack">
                                            <p className='details-text'>{Sites[selectedImageId - 1].stack}</p>
                                            <p className='details-text'>{Sites[selectedImageId - 1].stack_1}</p>
                                            <p className='details-text'>{Sites[selectedImageId - 1].stack_2}</p>
                                            <p className='details-text'>{Sites[selectedImageId - 1].stack_3}</p>
                                        </div>
                                    </div>
                                </div>
                                {selectedImageId !== null && (
                                    <div className="recommandations-content">
                                        <div className="recommandations-content-img">
                                            <div className="container-recommandations">
                                                <img
                                                    className="recommandations-image2"
                                                    src={basePathToImages + Sites[selectedImageId - 1].recommandation_1}
                                                    alt={`Image ${selectedImageId}`}
                                                />
                                                <img
                                                    className="recommandations-image1"
                                                    src={basePathToImages + Sites[selectedImageId - 1].recommandation}
                                                    alt={`Image ${selectedImageId}`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <Link
                                    to={Sites[selectedImageId - 1].link}
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