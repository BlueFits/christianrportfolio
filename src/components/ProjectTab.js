import React from "react";

const ProjectTab = ({ imageUrl, title, description, showClass }) => {
    return (
        <div className={`project_container soft_shadow ${showClass}`}>
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

export default ProjectTab;