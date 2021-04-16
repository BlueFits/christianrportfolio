import React from "react";

const ProjectTab = ({ projectId, imageUrl, title, description, showClass, logoImg, projectUrl, logoWidth, bgColor, technologies }) => {

    const onClickHandler = () => {
        window.open(projectUrl, '_blank').focus();
    };

    return (
        <div id={projectId} onClick={onClickHandler} className={`project_container soft_shadow`}>
            <div style={{ backgroundImage: `url(${imageUrl})`, backgroundColor: bgColor }} className="project_image_container">
                <div className="project_logo_container" style={{ width: logoWidth }}>
                    <img 
                        alt="project_background"
                        src={logoImg}
                        style={{ height: "100%", width: "100%" }} 
                    />
                </div>
            </div>
            <div className="project_description">
                <h2 style={{ marginBottom: 7 }}>{title}</h2>
                <p>{description}</p>
                <p className="project_tech_desc">{technologies}</p>
            </div>
        </div>
    );
}

export default ProjectTab;