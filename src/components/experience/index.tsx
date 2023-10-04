import "./styles.css";
import { useEffect, useRef, useState } from "react";
import ExperiencesData from "../../data/experiences.json";
import { Fade } from 'react-awesome-reveal';
import { Experience } from "../types/types";

//Components
import Mission from "./mission";
import Oclock from "./oclock";
import Stage from "./stage";


export default function Experience() {


    const [addClassDisplay, setAddClassToDisplay] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState<string | null>(null);

    const handleClick = (experienceType: string) => {
        setSelectedExperience(experienceType);
        setIsExpanded(true);
        setAddClassToDisplay(true);

        document.body.style.overflow = "hidden";
        document.body.style.transition = 'right 400ms ease';

        if (window.innerWidth > 720) {
            document.body.style.right = "-25%";
    };
        }   


    const removeExtendClass = () => {
        setAddClassToDisplay(false);
        setIsExpanded(false);

        document.body.style.overflow = "auto";
        document.body.style.right = "0%"
    }

    const linesRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('display');
                } else {
                    entry.target.classList.remove('display');
                }
            });
        });
        if (linesRef.current && linesRef.current.length > 0) {
            linesRef.current.forEach((line) => {
                if (line instanceof Element) {
                    observer.observe(line);
                }
            });
        }
        return () => {
            observer.disconnect();
        };
    }, []);

    const handleVisibilityChange = (_inView: boolean, _right: any) => { };




    return (
        <div className="main">
            <div className={`experience-main ${isExpanded ? 'extended' : ''}`}>
                <div className="experience-title">
                    <h1 className='experience-container-title'>Expériences</h1>
                </div>
                {ExperiencesData.map((info, i) => (
                    <div key={i} className="experience-container">
                        <Fade
                            delay={500}
                            direction="left"
                            onVisibilityChange={handleVisibilityChange}
                        >
                            <div className="experience-left">
                                <div
                                    className="experience-stage"
                                    onClick={() => handleClick("stage")}>
                                    <div className="experience-stage-title">
                                        <h2 className="stage-title">{info.stage.title}</h2>
                                    </div>
                                    <div className="experience-stage-container-line">
                                        <div
                                            className="experience-stage-line"
                                            ref={(el) => linesRef.current.push(el as HTMLDivElement)}>
                                        </div>
                                    </div>
                                    <div className="experience-stage-date">
                                        <h2 className="stage-date">{info.stage.start} - {info.stage.end}</h2>
                                        <h2 className="stage-year">{info.stage.year}</h2>
                                    </div>
                                </div>
                                <div className="experience-oclock" onClick={() => handleClick("oclock")}>
                                    <div className="experience-oclock-title">
                                        <h2 className="oclock-title">{info.oclock.title}</h2>
                                    </div>
                                    <div className="experience-oclock-container-line">
                                        <div
                                            className="experience-oclock-line"
                                            ref={(el) => linesRef.current.push(el as HTMLDivElement)}>
                                        </div>
                                    </div>
                                    <div className="experience-oclock-date">
                                        <h2 className="oclock-date">{info.oclock.start} - {info.oclock.end}</h2>
                                        <h2 className="oclock-year">{info.oclock.year}</h2>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <div className="experience-middle">
                            <div
                                className="experience-line-middle"
                                ref={(el) => linesRef.current.push(el as HTMLDivElement)}>
                            </div>
                        </div>
                        <Fade
                            delay={500}
                            direction="right"
                            onVisibilityChange={handleVisibilityChange}
                        >
                            <div className="experience-right">
                                <div className="experience-mission" onClick={() => handleClick("mission")}>
                                    <div className="experience-mission-title">
                                        <h2 className="mission-title">{info.mission.title}</h2>
                                    </div>
                                    <div className="experience-line">
                                        <div
                                            className="experience-mission-line"
                                            ref={(el) => linesRef.current.push(el as HTMLDivElement)}>
                                        </div>
                                    </div>
                                    <div className="experience-mission-date">
                                        <h2 className="mission-date">{info.mission.start} - {info.mission.end}</h2>
                                        <h2 className="mission-year">{info.mission.year}</h2>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>

                ))}
                {selectedExperience === "stage" && (
                    <Stage
                        addClassDisplay={addClassDisplay}
                        removeExtendClass={removeExtendClass}
                    />
                )}
                {selectedExperience === "oclock" && (
                    <Oclock
                        addClassDisplay={addClassDisplay}
                        removeExtendClass={removeExtendClass}
                    />
                )}
                {selectedExperience === "mission" && (
                    <Mission
                        addClassDisplay={addClassDisplay}
                        removeExtendClass={removeExtendClass}
                    />
                )}
            </div>
        </div>
    )
}