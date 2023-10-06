import ExperiencesData from "../../../data/experiences.json";
import { DisplayProps } from "../../types/types";
import "./styles.css";
import { Link } from 'react-router-dom';


const basePathToImages = '/images/';

export default function Mission({ addClassDisplay, removeExtendClass }: DisplayProps) {
    return (
        <div className={`container-mission ${addClassDisplay ? 'display' : ''}`}>
            {ExperiencesData.map((info, i) => (
                <div key={i} className="container-info-mission">
                    <button
                        className="popup-close"
                        onClick={removeExtendClass}
                    >
                        X
                    </button>
                    <h1 className="container-info-title">{info.mission.company}</h1>
                    <section className="container-info-images">
                        <img className="container-info-images-left" src={basePathToImages + info.mission.image} alt="image_1" />
                        <img className="container-info-images-right" src={basePathToImages + info.mission.image2} alt="image_2" />
                    </section>
                    <section className="container-info-text">
                        <section className="container-info-text-left">
                            <h2 className="container-text-left-title">Développement</h2>
                            <p>{info.mission.description}</p>
                            <p>{info.mission.description_1}</p>
                            <ul>
                                <div className="container-icon-description">
                                    <i className="fa fa-check"></i>
                                    <li className="container-info-description">{info.mission.description_2}</li>
                                </div>
                                <div className="container-icon-description">
                                    <i className="fa fa-check"></i>
                                    <li className="container-info-description">{info.mission.description_3}</li>
                                </div>
                                <div className="container-icon-description">
                                    <i className="fa fa-check"></i>
                                    <li className="container-info-description">{info.mission.description_4}</li>
                                </div>
                                <div className="container-icon-description">
                                    <i className="fa fa-check"></i>
                                    <li className="container-info-description">{info.mission.description_5}</li>
                                </div>
                            </ul>
                        </section>
                        <section className="container-info-text-right">
                            <h2 className="container-text-right-title">Infos Projet</h2>
                                    <p className="">
                                        <i className="fa fa-calendar fa-2x"></i>{info.mission.start} - {info.mission.end} {info.mission.year}</p>
                                <div className="container-all-stack">
                                    <p className="container-info-stack">{info.mission.info_stack}</p>
                                    <p className="container-info-stack">{info.mission.info_stack_1}</p>
                                    <p className="container-info-stack">{info.mission.info_stack_2}</p>
                                    <p className="container-info-stack">{info.mission.info_stack_3}</p>
                                    <p className="container-info-stack">{info.mission.info_stack_4}</p>
                                    <p className="container-info-stack">{info.mission.info_stack_5}</p>
                                    <p className="container-info-stack">{info.mission.info_stack_6}</p>
                                </div>
                        </section>
                    </section>
                    <Link
                        to={info.mission.link}
                        target="_blank"
                        className="container-info-link">Voir le site</Link>
                </div>
            ))}
        </div>
    )
}
