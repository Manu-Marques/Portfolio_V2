import './styles.css';
import FormationsData from "../../../src/data/formations.json";


export default function Formations() {



    return (
        <div className="formations-main"  id="formations">
            <h1 className='formations-title'>Formations</h1>
            <div className="formations-table">
                {FormationsData.map((info, i) => (
                    <div key={i} className="formations-container">
                        <div className="formations-top">
                            <div className="formations-dev">
                                <h1 className="formations-subtitle">{info.oclock.title}</h1>
                                <h2 className='formations-level'>{info.oclock.level}</h2>
                                <h1 className='formations-oclock-subtitle'>{info.oclock.school} - {info.oclock.city}</h1>
                                <ul className='formations-list'>
                                    <li className="formations-item">{info.oclock.description}</li>
                                    <li className="formations-item">{info.oclock.description_1} <span className="formations-item-word">{info.oclock.description_1_2}</span>
                                    </li>
                                    <li className="formations-item">{info.oclock.description_2} <span className="formations-item-word">{info.oclock.description_2_2}</span>
                                    </li>
                                    <li className="formations-item">{info.oclock.description_3} </li>
                                </ul>
                                <div className="formations-row">
                                    <p className='formations-year'>{info.oclock.start} à {info.oclock.end}</p>
                                </div>
                            </div>
                        </div>
                        <div className="formations-bottom">
                            <div className="formations-bus">
                                <h1 className="formations-subtitle">{info.couturier.title}</h1>
                                <h2 className='formations-level'>{info.couturier.level}</h2>
                                <h1 className='formations-oclock-subtitle'>{info.couturier.school} - {info.couturier.city}</h1>
                                <ul className='formations-list'>
                                    <li className="formations-item">{info.couturier.description}</li>
                                    <li className="formations-item">{info.couturier.description_1}</li>
                                    <li className="formations-item">{info.couturier.description_2}</li>
                                    <li className="formations-item">{info.couturier.description_3}</li>
                                </ul>
                                <div className="formations-row">
                                    <p className='formations-year'>{info.couturier.start} à {info.couturier.end}</p>
                                </div>
                            </div>
                            <div className="formations-commerce">
                                <h1 className="formations-subtitle">{info.chavanne.title}</h1>
                                <h2 className='formations-level'>{info.chavanne.level}</h2>
                                <h1 className='formations-oclock-subtitle'>{info.chavanne.school} - {info.chavanne.city}</h1>
                                <ul className='formations-list'>
                                    <li className="formations-item">{info.chavanne.description}</li>
                                    <li className="formations-item">{info.chavanne.description_1}</li>
                                    <li className="formations-item">{info.chavanne.description_2}</li>
                                    <li className="formations-item">{info.chavanne.description_3}</li>
                                </ul>
                                <div className="formations-row">
                                    <p className='formations-year'>{info.chavanne.start} à {info.chavanne.end}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}