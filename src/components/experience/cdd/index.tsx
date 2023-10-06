import ExperiencesData from "../../../data/experiences.json";
import { DisplayProps } from "../../types/types";
import "./styles.css";
import { Link } from 'react-router-dom';


const basePathToImages = '/images/';


export default function Cdd({ addClassDisplay, removeExtendClass }: DisplayProps) {


    return (
        <div className={`container-cdd ${addClassDisplay ? 'display' : ''}`}>
            {ExperiencesData.map((info, i) => (
                <div key={i} className="container-info-cdd">
                    <button
                        className="popup-close"
                        onClick={removeExtendClass}
                    >
                        X
                    </button>
                    <h1 className="container-info-title">{info.cdd.company}</h1>
                    <section className="container-info-images">
                        <img className="container-info-images-left" src={basePathToImages + info.cdd.image} alt="image_1" />
                        <img className="container-info-images-right" src={basePathToImages + info.cdd.image2} alt="image_2" />
                    </section>
                    <section className="container-info-text">
                        <section className="container-info-text-left">
                            <h2 className="container-text-left-title">Développement</h2>
                            <p>{info.cdd.description}</p>
                            <p>{info.cdd.description_1}</p>
                            <ul>
                                <div className="container-icon-description">
                                    <i className="fa fa-check"></i>
                                    <li className="container-info-description">{info.cdd.description_2}</li>
                                </div>
                                <div className="container-icon-description">
                                    <i className="fa fa-check"></i>
                                    <li className="container-info-description">{info.cdd.description_3}</li>
                                </div>
                                <div className="container-icon-description">
                                    <i className="fa fa-check"></i>
                                    <li className="container-info-description">{info.cdd.description_4}</li>
                                </div>
                                <div className="container-icon-description">
                                    <i className="fa fa-check"></i>
                                    <li className="container-info-description">{info.cdd.description_5}</li>
                                </div>
                            </ul>
                        </section>
                        <section className="container-info-text-right">
                            <h2 className="container-text-right-title">Infos Projet</h2>
                            <p className="">
                                <i className="fa fa-calendar fa-2x"></i>{info.cdd.start} - {info.cdd.end} {info.cdd.year}</p>
                            <div className="container-all-stack">
                                <p className="container-info-stack">{info.cdd.info_stack}</p>
                                <p className="container-info-stack">{info.cdd.info_stack_1}</p>
                                <p className="container-info-stack">{info.cdd.info_stack_2}</p>
                                <p className="container-info-stack">{info.cdd.info_stack_3}</p>
                                <p className="container-info-stack">{info.cdd.info_stack_4}</p>
                                <p className="container-info-stack">{info.cdd.info_stack_5}</p>
                                <p className="container-info-stack">{info.cdd.info_stack_6}</p>
                            </div>
                        </section>
                        <section className="container-recommandations">
                            <h2 className="container-recommandations-title">Recommandations</h2>
                        <div className="container-recommandations">
                            <img className="container-recommandations-image" src={basePathToImages + info.cdd.recommandation} alt="recommandations" />
                            <img className="container-recommandations-image" src={basePathToImages + info.cdd.recommandation_1} alt="recommandations" />
                            </div>
                            </section>
                    </section>
                    <Link
                        to={info.cdd.link}
                        target="_blank"
                        className="container-info-link">Voir le site</Link>
                </div>
            ))}
        </div>
    )
}
