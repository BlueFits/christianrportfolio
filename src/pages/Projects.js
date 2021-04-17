import React, { useEffect } from "react";

import SmallHeader from "../components/SmallHeader";
import ProjectTab from "../components/ProjectTab";
import NextTab from "../components/NextTab";

import Colors from "../constants/Colors";

import ScrollPageEvent from "../effects/ScrollPageEvent";

const Projects = ({ projectShowClass, projectCategoryClickHandler, selected, nextOnClick, prev }) => {

    useEffect(() => ScrollPageEvent("project", nextOnClick, prev), [ScrollPageEvent]);

    useEffect(() => {
        const projectElement = document.getElementById("project");
        const maxPageHeight = (projectElement.scrollHeight - projectElement.clientHeight) - 10;
        // const projectNextTab = document.getElementById("project_nextTab_id");

        const handleScroll = () => {
            const offset = projectElement.scrollTop;

            const projectElements = document.getElementsByClassName('project_image_container');  
            for (const project of projectElements) {
                project.style.backgroundPositionY = (offset * 0.2) + "px";
            }

            // if (offset >= maxPageHeight) {
            //     projectNextTab.style.transform = "translateY(0)";
            // } else {
            //     projectNextTab.style.transform = "translateY(50px)";
            // }

        };

        projectElement.addEventListener("scroll", handleScroll);
        return () => projectElement.removeEventListener("scroll", handleScroll);
    });

    return (
        <div>
            <section className="projects_section">
                <div className="project_header">
                    <SmallHeader text="Portfolio" color="black"/>
                    <h1 id="project_header_id" style={{...styles.transitionStyle, color: Colors.darkgrey }}>Take A Look At My Work</h1>
                    <ul id="project_ul_id" style={styles.transitionStyle} className="projects_ul">
                        <li className={`projects_category ${selected[0]}`} onClick={projectCategoryClickHandler.bind(this, "all")}>All</li>
                        <li className={`projects_category ${selected[1]}`} onClick={projectCategoryClickHandler.bind(this, "website")}>Websites</li>
                        <li className={`projects_category ${selected[3]}`} onClick={projectCategoryClickHandler.bind(this, "mobile")}>Mobile</li>
                        <li className={`projects_category ${selected[2]}`} onClick={projectCategoryClickHandler.bind(this, "design")}>Design</li>
                    </ul>
                </div>
                
                <div className="projects_showcase">
                    <ProjectTab
                        projectId={"bbtease_id"}
                        title="BBTease"
                        description="Restaurant Landing Page" 
                        logoImg={"https://bbtease.onrender.com/static/media/LogoMain.3eb2e247.svg"}
                        projectUrl={"https://bbtease.onrender.com/"}
                        logoWidth={"70%"}
                        bgColor={"#1f1f1f"}
                        technologies={"React | NodeJs "}
                    />

                    <ProjectTab
                        projectId={"bty_project_id"}
                        imageUrl="https://raw.githubusercontent.com/BlueFits/personalWeb/master/src/assets/images/BetterThanYesterday/backdrop.png"
                        title="BetterThanYesterday"
                        description="Mobile App, Landing Page" 
                        logoImg={"https://raw.githubusercontent.com/BlueFits/personalWeb/master/src/assets/images/BetterThanYesterday/logo.png"}
                        projectUrl={"https://betterthanyesterdayapp.herokuapp.com/"}
                        technologies={"React | React-Native | Redux | Redux-Thunk | NodeJS | MongoDB "}
                    />

                    <ProjectTab
                        projectId={"just_return_id"}
                        title="Just Return"
                        description="Landing Page" 
                        logoImg={"https://justreturn.herokuapp.com/static/media/LogoOnDark.9edde41e.svg"}
                        projectUrl={"https://justreturn.herokuapp.com/"}
                        logoWidth={"70%"}
                        bgColor={"#00887A"}
                        technologies={"React | NodeJS | MongoDB"}
                    />

                    <ProjectTab
                        projectId={"hangry_id"}
                        title="Hangry App"
                        description="Mobile App" 
                        logoImg={"https://www.joshuaghori.com/images/pic3.jpg"}
                        projectUrl={"https://play.google.com/store/apps/details?id=com.group.hangry"}
                        logoWidth={"70%"}
                        bgColor={"#fff"}
                        technologies={"React-Native | Redux | Redux-Thunk | MongoDB"}
                    />
                </div>

                {/* <div id="project_nextTab_id" className="project_nextTab_container">
                    <NextTab 
                        text="Next: Contact"
                        color={Colors.lightblue}
                        textColor="#fff"
                        onClick={nextOnClick}
                    />
                </div> */}
            </section>
        </div>
    ); 
};

const styles = {
    transitionStyle: {
        transition: "0.3s ease-in-out"
    }
};

export default Projects;