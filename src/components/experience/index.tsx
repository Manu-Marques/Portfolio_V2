import './styles.css';
import ExperienceData from "../../../src/data/experiences.json";
import { Link } from 'react-router-dom';


const basePathToImages = '/images/';



export default function Experience() {


    return (
        <div className="experience-main">
            <h1 className='experience-title'>Experiences</h1>
            {ExperienceData.map((experience) => (
                <section className="experience-container">
                    <div className='experience-left'>
                    <section className="container-info-text-left">
                            <h2 className="container-text-left-title">{experience.number} Développement - {experience.status}</h2>
                            <p className='container-experience-description'>{experience.description}</p>
                            <p className='container-experience-description'>{experience.description_1}</p>
                            <ul className='container-list-info'>
                                <div className="container-icon-description">
                                    <i className="fa fa-check"></i>
                                    <li className="container-info-description">{experience.description_2}</li>
                                </div>
                                <div className="container-icon-description">
                                    <i className="fa fa-check"></i>
                                    <li className="container-info-description">{experience.description_3}</li>
                                </div>
                                <div className="container-icon-description">
                                    <i className="fa fa-check"></i>
                                    <li className="container-info-description">{experience.description_4}</li>
                                </div>
                                <div className="container-icon-description">
                                    <i className="fa fa-check"></i>
                                    <li className="container-info-description">{experience.description_5}</li>
                                </div>
                                <div className="container-icon-description">
                                    <i className="fa fa-check"></i>
                                    <li className="container-info-description">{experience.description_6}</li>
                                </div>
                            </ul>
                        </section>
                        <section className="container-info-text-right">
                            <h2 className="container-text-right-title">Infos Projet</h2>
                                    <p className="container-experience-calendar">
                                        <i className="fa fa-calendar fa-2x"></i>{experience.start} - {experience.end} {experience.year}
                                        </p>
                                <div className="container-all-stack">
                                    <p className="container-info-stack">{experience.info_stack}</p>
                                    <p className="container-info-stack">{experience.info_stack_1}</p>
                                    <p className="container-info-stack">{experience.info_stack_2}</p>
                                    <p className="container-info-stack">{experience.info_stack_3}</p>
                                    <p className="container-info-stack">{experience.info_stack_4}</p>
                                    <p className="container-info-stack">{experience.info_stack_5}</p>
                                    <p className="container-info-stack">{experience.info_stack_6}</p>
                                </div>
                        </section>
                        {experience.link &&
                        <Link
                        to={experience.link}
                        target="_blank"
                        className="container-info-link">Voir le site</Link>
                        }
                        <section>
                        </section>
                    </div>
                    <div className='experience-right'>
                        <h1 className='experience-company'>{experience.company}</h1>
                        <section className='experience-images'>
                            <img
                            className='experience-image'
                                src={basePathToImages + experience.image}
                                alt="" />                              
                        </section>
                    </div>
                </section>
            ))}
        </div>
    )
}