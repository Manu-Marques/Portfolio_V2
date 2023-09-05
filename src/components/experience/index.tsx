import './styles.css';
import ExperiencesData from "../../../src/data/experiences.json";


export default function Experience() {
    return (
        <div className="experience-main" id="experience">
            <h1 className='experience-title'>Expériences</h1>
            <div className="experience-table">
                {ExperiencesData.map((info, i) => (
                    <div key={i} className="experience-container">
                        <div className="experience-left">
                            <div className="experience-hotel">
                                <h1 className='experience-subtitle'>{info.stage.title}</h1>
                                <h1 className='experience-hotel-subtitle'>{info.stage.company} - {info.stage.city}</h1>
                                <ul className='experience-hotel-list'>
                                    <li className='experience-item'>{info.stage.description}</li>
                                    <li className='experience-item'>{info.stage.description_1}</li>
                                    <li className='experience-item'>{info.stage.description_2}</li>
                                    <li className='experience-item'>{info.stage.description_3}</li>
                                </ul>
                                <div className="experience-row">
                                    <p className='experience-year'>{info.stage.start} à {info.stage.end}</p>
                                </div>
                            </div>
                            <><div className='experience-oclock'>
                                <h1 className='experience-subtitle'>{info.oclock.title}</h1>
                                <h1 className='experience-oclock-subtitle'>{info.oclock.company} - {info.oclock.city}</h1>
                                <ul className='experience-oclock-list'>
                                    <li className='experience-item'>{info.oclock.description}</li>
                                    <li className='experience-item'>{info.oclock.description_1}</li>
                                    <li className='experience-item'>{info.oclock.description_2}</li>
                                    <li className='experience-item'>{info.oclock.description_3}</li>
                                </ul>
                                <div className="experience-row">
                                    <p className='experience-year'>{info.oclock.start} à {info.oclock.end}</p>
                                </div>
                            </div>
                                </>
                        </div>
                        <div className="experience-right">
                            <div className="experience-dev">
                                <h1 className='experience-subtitle'>{info.dev.title}</h1>
                                <h1 className='experience-dev-subtitle'>{info.dev.company} - {info.dev.city}</h1>
                                <ul className='experience-dev-list'>
                                    <li className='experience-item'>{info.dev.description}</li>
                                    <li className='experience-item'>{info.dev.description_1}</li>
                                    <li className='experience-item'>{info.dev.description_2}</li>
                                    <li className='experience-item'>{info.dev.description_3}</li>
                                </ul>
                                <div className="experience-row">
                                    <p className='experience-year'>{info.dev.start} à {info.dev.end} </p>
                                </div>
                            </div>
                            <div className="experience-stavo">
                                    <h1 className='experience-subtitle'>{info.bus.title}</h1>
                                    <h1 className='experience-stavo-subtitle'>{info.bus.company} - {info.bus.city}</h1>
                                    <ul className='experience-stavo-list'>
                                        <li className='experience-item'>{info.bus.description}</li>
                                        <li className='experience-item'>{info.bus.description_1}</li>
                                        <li className='experience-item'>{info.bus.description_2}</li>
                                        <li className='experience-item'>{info.bus.description_3}</li>
                                    </ul>
                                    <div className="experience-row">
                                        <p className='experience-year'>{info.bus.start} à {info.bus.end}</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}