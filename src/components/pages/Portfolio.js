import React from 'react';
import projects from '../../assets/projects';

const Portfolio = () => {
    return (
        <div className="center-container">
            <div className="portfolio-container">  
                {projects.map((project, index) => {
                    return (
                        <div className="project">
                            <h3 className="project-title">{project.title}</h3>
                        </div>  
                )
            })}
            </div>
        </div>
    );
}

export default Portfolio;