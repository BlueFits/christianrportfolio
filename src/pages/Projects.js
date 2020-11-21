import React from "react";

import SmallHeader from "../components/SmallHeader";

import Colors from "../constants/Colors";

const Projects = () => {
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
           </div>
       </section>
   ); 
};

export default Projects;