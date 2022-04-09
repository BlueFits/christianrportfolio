import React, { useState, useEffect } from "react";
import { FiGithub } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";
import { isBrowser } from "react-device-detect";

import ScrollPageEvent from "../effects/ScrollPageEvent";

import SmallHeader from "../components/SmallHeader";

import Animations from "../effects/Animations";

const experience = {
    bmo: {
        name: "BMO",
        header : "Web Application Developer @",
        website: {
            link: "https://www.bmo.com"
        },
        date: "March 2022 - Present",
        jobDesc: [
            "Developed BMO website pages for split testing using Adobe Target, in combination with HTML/CSS/Javascript and Jquery resulting in a a more responsive and better overall user website experience.",
        ],
    },
    coxAuto: {
        name: "Cox Automotive",
        header : "Full Stack Developer @",
        website: {
            link: "https://www.coxautoinc.com/"
        },
        date: "June 2021 - December 2021",
        jobDesc: [
            "Programmed front-end client (BMW) mobile application from scratch, working with technologies like React-Native, Redux-Toolkit, AWS, Auth0, and more.",
            "Worked on both back-end and front-end of the MUVIT web app, using NextJS  to combine server side rendering and client side rendering to achieve optimal website load times for users.",
            "Used NodeJS, Express and Mongo to develop and manage databases, as well as design REST APIs.",
            "Helped implement and write internal private package to be used across company teams.",
            "Reviewed code, debugged problems and corrected issues."
        ],
    },
    hangry: {
        name: "Hangry",
        header : "Lead Software Engineer @",
        website: {
            link: "https://www.getqrunch.com/"
        },
        date: "Aug 2020 - Feb 2021",
        jobDesc: [
            "Developed Hangry mobile application using React-Native and Redux-toolkit from scratch with a NodeJS backend to handle routes, traffic tracking, and authentication.",
            "Designed and Developed a responsive website across all platforms for client (BBTease) company website using Adobe XD and ReactJS.",
            "Built custom animations using a combination of react packages, vanilla javascript, and CSS.",
            "Used NodeJS with express to program a backend that measured traffic and email handling using Nodemailer.",
        ],
    },
    // bbtease : {
    //     name: "Bbtease",
    //     header: "Freelance Web Developer and Designer @",
    //     website: {
    //         link: "https://bbtease.com/"
    //     },
    //     date: "Oct 2020 – Nov 2020",
    //     jobDesc: [
    //         "Designed the front-end for the website using Adobe XD",
    //         "Developed the website to be responsive across all platforms using the React Framework",
    //         "Built custom animations using a combination of react packages, vanilla javascript and CSS",
    //         "Used NodeJS with express to program a backend that is capable of measuring traffic and handling email using Nodemailer",
    //     ],
    // }
};

const Work = ({ nextOnClick, prev }) => {

    useEffect(() => ScrollPageEvent("project", nextOnClick, prev), [ScrollPageEvent]);

    const [experienceMenu, setExperienceMenu] = useState([
        "experience_selected", 
        "",
        "",
    ]);
    const [company, setCompany] = useState(experience.bmo);
    const [currentVal, setCurrentVal] = useState("bmo");

    //Components
    const WorkHeader = ({ topText, textA, textB }) => {
        return (
            <div className="work_header">
                <SmallHeader text={topText}/>
                <h1>
                    <span style={{ color: "#fff" }}>{textA}</span>
                    <br/> 
                    {textB}
                </h1>
            </div>
        )
    };

    const ProjectLi = ({ src, title, subTitle, desc, tech, git, website, reverse }) => {

        const browserStyle = { paddingLeft: reverse ? 0 : 70, paddingRight: reverse ? 70 : 0 };

        return (
            <li className={`project_li ${reverse ? "project_li_reverse" : ""}`}>
                <div 
                    className="project_preview"
                    onClick={() => {
                        window.open(website, '_blank').focus();
                    }}
                >
                    <img src={src} style={{ height: "100%" }}/>
                </div>

                <div style={ isBrowser ? browserStyle : {}} className={`project_info`}>
                    <div>
                        <h2 className="newProject_header">{title}</h2>
                        <span className="newProject_subHeader"><strong>{subTitle}</strong></span>
                    </div>

                    <div className="newProject_description text_secondary">
                        <p>{desc}</p>
                    </div>

                    <div className="newProject_tech">
                        {tech.map(val => <p>{val}</p>)}
                    </div>
                    
                    <div>
                        <FiGithub 
                            className="newProject_link" 
                            size={24}
                            onClick={() => {
                                window.open(git, '_blank').focus();
                            }}
                        />
                        <IoMdOpen className="newProject_link" size={26}
                            onClick={() => {
                                window.open(website, '_blank').focus();
                            }}
                        />
                    </div>
                </div>
            </li>
        );
    };

    //Handlers

    const experienceHandler = (title) => {

        const header = document.getElementById("experience_contents_header");
        const description = document.getElementById("experience_contents_description");

        const animate = (experience) => {
            Animations.fade.onAnim(header);
            Animations.fade.onAnim(description)

            setTimeout(() => {
                setCompany(experience);
                Animations.fade.init(header);
                Animations.fade.init(description)
            }, 300);
        }

        switch (title) {
            case "bmo":
                if (currentVal === "bmo") {
                    break
                }
                setExperienceMenu([
                    "experience_selected",
                    "",
                    "",
                ]);
                animate(experience.bmo);
                setCurrentVal("bmo");
                break;
            case "coxAuto":
                if (currentVal === "coxAuto") {
                    break
                }
                setExperienceMenu([
                    "",
                    "experience_selected",
                    "",
                ]);
                animate(experience.coxAuto);
                setCurrentVal("coxAuto");
                break;
            case "hangry":
                if (currentVal === "hangry") {
                    break;
                }
                setExperienceMenu([
                    "",
                    "",
                    "experience_selected",
                ]);
                animate(experience.hangry);
                setCurrentVal("hangry");

                break;
            // case "bbtease":
            //     if (currentVal === "bbtease") {
            //         break;
            //     }
            //     setExperienceMenu([
            //         "",
            //         "",
            //         "",
            //         "experience_selected",
            //     ]);
            //     animate(experience.bbtease);
            //     setCurrentVal("bbtease");
            //     break;
        }
    };


    return(
        <div>
            <section className="projects_section">

                <div style={{ height: 80, }} />

                <WorkHeader 
                    topText={"Experience"}
                    textA={"Take A Look"}
                    textB={"Where I've Worked"}
                />
                

                <div className="experience_container">
                    <ul className="experience_selection">
                        <li onClick={experienceHandler.bind(this, "bmo")} className={`experience_menu ${experienceMenu[0]}`}><strong className="experience_header">BMO</strong></li>
                        <li onClick={experienceHandler.bind(this, "coxAuto")} className={`experience_menu ${experienceMenu[1]}`}><strong className="experience_header">Cox</strong></li>
                        <li onClick={experienceHandler.bind(this, "hangry")} className={`experience_menu ${experienceMenu[2]}`}><strong className="experience_header">Hangry</strong></li>
                        {/* <li onClick={experienceHandler.bind(this, "bbtease")} className={`experience_menu ${experienceMenu[3]}`}><strong className="experience_header">Bbtease</strong></li> */}
                    </ul>

                    <div className="experience_contents">
                        <div id="experience_contents_header">
                            <h2>{company.header} <a className="company_link" target="_blank" href={company.website.link}>{company.name}</a></h2>
                            <p>{company.date}</p>
                        </div>

                        <div className="experience_contents_info">
                            <ul id="experience_contents_description">
                                {company.jobDesc.map((desc) => <li>{desc}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="project_wrapper">
                    <WorkHeader 
                        topText={"Projects"}
                        textA={"Some Things"}
                        textB={"That I Have Built"}
                    />

                    <ul className="project_ul_container">
                        <ProjectLi
                            src={"https://drive.google.com/uc?export=download&id=1PC9TPC2PJwvUNQs4rDChHrMLOX1XbMwL"}
                            title={"Bbtease"}
                            subTitle={"Web Development"}
                            desc={
                                `Bbtease's landing page for their restaurant. Designed and developed
                                their website using React with a NodeJs backend.`
                            }
                            tech={["React.js", "Node.js"]}
                            git={"https://github.com/BlueFits/bbtease"}
                            website={"https://bbtease.com/"}
                        />

                        <ProjectLi
                            src={"https://drive.google.com/uc?export=download&id=1xyogC3GC8_ebq8UJzvp5ybjZYa8GPMoD"}
                            title={"BetterThanYesterday"}
                            subTitle={"Mobile App and Website"}
                            desc={
                                `A productivity application that keeps track of progress by comparing accumulated points
                                from yesterday to your points today.`
                            }
                            tech={["React.js", "Redux", "Thunk", "Node.Js", "MongoDB"]}
                            git={"https://github.com/BlueFits/BetterThanYesterday"}
                            website={"https://betterthanyesterdayapp.herokuapp.com/"}
                            reverse={true}
                        />

                        <ProjectLi
                            src={"https://drive.google.com/uc?export=download&id=1QbtqCRk4az7mnkf9A-3aP-v4jfqvk12j"}
                            title={"TheGamerStory"}
                            subTitle={"Web App"}
                            desc={
                                `A gaming blogging website to share gaming experiences with each other.`
                            }
                            tech={["NextJS", "Redux-Toolkit", "Material-UI", "Node.Js", "Tailwind-CSS"]}
                            git={"https://github.com/BlueFits/qa-thegamerstory"}
                            website={"https://qa-thegamerstory.herokuapp.com/"}
                        />
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Work;