import React from "react";

import SmallHeader from "../components/SmallHeader";

import Colors from "../constants/Colors";

const Projects = () => {

    const Tab = ({ imageUrl, title, description }) => {
        return (
            <div className="project_container soft_shadow">
                <div style={{ backgroundImage: `url(${imageUrl})` }} className="project_image_container">
                {/* Logo goes here */}
                </div>
                <div className="project_description">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        );
    }

    return (
        <section className="projects_section">
            <div className="project_header">
                <SmallHeader text="Portfolio" color="black"/>
                <h1 style={{ color: Colors.darkgrey }}>Look at My Products.</h1>
                <ul className="projects_ul">
                    <li>Website</li>
                    <li>Illustration</li>
                    <li>Mobile</li>
                </ul>
            </div>
            
            <div className="projects_showcase">
                <Tab 
                    imageUrl="https://images.unsplash.com/photo-1606654951863-70346cd12201?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
                    title="BetterThanYesterday"
                    description="Mobile App, Landing Page"
                />
            </div>
        </section>
    ); 
};

export default Projects;