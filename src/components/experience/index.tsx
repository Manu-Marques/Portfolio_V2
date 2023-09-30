import "./styles.css";
import { useEffect, useRef, useState } from "react";
import ExperiencesData from "../../data/experiences.json";
import { Fade } from 'react-awesome-reveal';
import { Experience } from "../types/types";


export default function Experience() {

    const [selectedExperienceId, setSelectedExperienceId] = useState<number | null>(null);

    const handleClick = (experienceId: number) => {
        setSelectedExperienceId(experienceId);
      };

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
        <div className="experience-main">
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
                        <div className="experience-stage" onClick={() => handleClick(i)}>
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
                            <div className="experience-oclock" onClick={() => handleClick(i)}>
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
                        <div className="experience-mission" onClick={() => handleClick(i)}>
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
                            <div className="experience-bus" onClick={() => handleClick(i)}>
                                <div className="experience-bus-title">
                                    <h2 className="bus-title">{info.bus.title}</h2>
                                </div>
                                <div className="experience-bus-date">
                                    <div className="experience-line">
                                        <div
                                            className="experience-bus-line"
                                            ref={(el) => linesRef.current.push(el as HTMLDivElement)}>
                                        </div>
                                    </div>
                                    <div className="experience-bus-date">
                                        <h2 className="bus-date">{info.bus.start} - {info.bus.end}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            ))}
      {/* {selectedExperienceId !== null && (
            <div className="selected-experience-info">
                <p>{ExperiencesData[selectedExperienceId].mission.description}</p>
            </div>
        )} */}
        </div>
    )
}