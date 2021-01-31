import React, { useState } from "react";

import SmallHeader from "../components/SmallHeader";
import ProjectTab from "../components/ProjectTab";

import Colors from "../constants/Colors";

// Figure out a way to animate on click of the next tab

const Projects = ({ projectShowClass, projectCategoryClickHandler, selected }) => {

    return (
        <section className="projects_section">
            <div className="project_header">
                <SmallHeader text="Portfolio" color="black"/>
                <h1 style={{ color: Colors.darkgrey }}>Look at My Products.</h1>
                <ul className="projects_ul">
                    <li className={`projects_category ${selected[0]}`} onClick={projectCategoryClickHandler.bind(this, "all")}>All</li>
                    <li className={`projects_category ${selected[1]}`} onClick={projectCategoryClickHandler.bind(this, "website")}>Websites</li>
                    <li className={`projects_category ${selected[2]}`} onClick={projectCategoryClickHandler.bind(this, "illustration")}>Illustration</li>
                    <li className={`projects_category ${selected[3]}`} onClick={projectCategoryClickHandler.bind(this, "mobile")}>Mobile</li>
                </ul>
            </div>
            
            <div className="projects_showcase">
                <ProjectTab
                    imageUrl="https://images.unsplash.com/photo-1606654951863-70346cd12201?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
                    title="BetterThanYesterday"
                    description="Mobile App, Landing Page" 
                    showClass={projectShowClass[0]}
                />

                <ProjectTab
                    imageUrl="https://images.unsplash.com/photo-1606654951863-70346cd12201?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
                    title="BetterThanYesterday"
                    description="Mobile App, Landing Page" 
                    showClass={projectShowClass[1]}
                />
            </div>
        </section>
    ); 
};

export default Projects;