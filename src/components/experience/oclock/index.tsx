import ExperiencesData from "../../../data/experiences.json";
import { DisplayProps } from "../../types/types";
import "./styles.css";
import { Link } from 'react-router-dom';


const basePathToImages = '/images/';

export default function Oclock({ addClassDisplay, removeExtendClass }: DisplayProps) {
    return (
        <div className={`container-oclock ${addClassDisplay ? 'display' : ''}`}>
            {ExperiencesData.map((info, i) => (
                <div key={i} className="container-info-oclock">
                    <button
                        className="popup-close"
                        onClick={removeExtendClass}
                    >
                        X
                    </button>
                    <h1 className="container-info-title">{info.oclock.company}</h1>
                    <section className="container-info-images">
                        <img className="container-info-images-left" src={basePathToImages + info.oclock.image} alt="image_1" />
                        <img className="container-info-images-right" src={basePathToImages + info.oclock.image2} alt="image_2" />
                    </section>
                    <section className="container-info-text">
                        <section className="container-info-text-left">
                            <h2 className="container-text-left-title">Développement</h2>
                            <p>{info.oclock.description}</p>
                            <p>{info.oclock.description_1}</p>
                            <ul>
                                <div className="container-icon-description">
                                    <i className="fa fa-check"></i>
                                    <li className="container-info-description">{info.oclock.description_2}</li>
                                </div>
                                <div className="container-icon-description">
                                    <i className="fa fa-check"></i>
                                    <li className="container-info-description">{info.oclock.description_3}</li>
                                </div>
                                <div className="container-icon-description">
                                    <i className="fa fa-check"></i>
                                    <li className="container-info-description">{info.oclock.description_4}</li>
                                </div>
                                <div className="container-icon-description">
                                    <i className="fa fa-check"></i>
                                    <li className="container-info-description">{info.oclock.description_5}</li>
                                </div>
                                <div className="container-icon-description">
                                    <i className="fa fa-check"></i>
                                    <li className="container-info-description">{info.oclock.description_6}</li>
                                </div>
                            </ul>
                        </section>
                        <section className="container-info-text-right">
                            <h2 className="container-text-right-title">Infos Projet</h2>
                                    <p className="">
                                        <i className="fa fa-calendar fa-2x"></i>{info.oclock.start} - {info.oclock.end} {info.oclock.year}</p>
                                <div className="container-all-stack">
                                    <p className="container-info-stack">{info.oclock.info_stack}</p>
                                    <p className="container-info-stack">{info.oclock.info_stack_1}</p>
                                    <p className="container-info-stack">{info.oclock.info_stack_2}</p>
                                    <p className="container-info-stack">{info.oclock.info_stack_3}</p>
                                    <p className="container-info-stack">{info.oclock.info_stack_4}</p>
                                    <p className="container-info-stack">{info.oclock.info_stack_5}</p>
                                    <p className="container-info-stack">{info.oclock.info_stack_6}</p>
                                    <p className="container-info-stack">{info.oclock.info_stack_7}</p>
                                    <p className="container-info-stack">{info.oclock.info_stack_8}</p>
                                </div>
                        </section>
                    </section>
                    <Link
                        to={info.oclock.link}
                        target="_blank"
                        className="container-info-link">Voir le site</Link>
                </div>
            ))}
        </div>
    )
}
