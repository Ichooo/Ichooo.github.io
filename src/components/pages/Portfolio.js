import React from 'react';
import projects from '../../assets/projects';

const Portfolio = () => {
    return (
        <div className="portfolio">
        <h3 className="portfolio-title"> PORTFOLIO</h3>
            <div className="portfolio-container">
                {projects.map((project, index) => {
                    return (
                        <div key={index} className="project">
                            <h3 className="project-title">{project.title}</h3>
                            <img className="project-image" src={require(`../../img/${project.image}.jpg`)} alt="projectImg"/>
                        </div>  
                )
            })}
            </div>
        </div>
    );
}

export default Portfolio;