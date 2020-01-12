import React from "react";
import projects from "../../assets/projects";

const Projects = props => {
  return (
    <div className="projects">
      <h3 className="section-title"> PROJECTS</h3>
      <div className="projects-container">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="bubble-border"
              onClick={() => props.toggleModal(project)}
            >
              <div className="bubble">
                <div className="img-container">
                  <img
                    className="bubble-image"
                    src={require(`../../img/${project.image}.jpg`)}
                    alt="projectImg"
                  />
                </div>

                <h3 className="bubble-title">{project.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
