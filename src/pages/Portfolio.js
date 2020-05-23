import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import ProjectContent from "../components/Project/ProjectContent"
import "./Portfolio.css";
import projects from "../components/Project/projects.json";
import ProjectContext from "../utils/ProjectContext";

function Portfolio() {

  const [projectState, setProjectState] = useState({
    id: "",
    key: "",
    title: "",
    caption: "",
    image: "",
    app: "",
    github: "",
    tech: []
  });

  useEffect(() => {

    projects.map(project => {
      return(
      setProjectState({
        id: project.id,
        key: project.id,
        title: project.title,
        caption: project.caption,
        image: project.image,
        app: project.app,
        github: project.github,
        tech: project.tech
      })
    )
    })

  }, []);


  return (
    <div>
      <ProjectContext.Provider value={projectState}>
        <Header h1="My Portfolio" p="A portfolio of projects I've done so far" />
        <div className="img-container">
          <div className="row">
            {projects.map(project => (
              <ProjectContent
                id={project.id}
                key={project.id}
                title={project.title}
                image={project.image}
                caption={project.caption}
                app={project.app}
                github={project.github}
                tech={project.tech}
              />
            ))}
          </div>
        </div>
        <div className="form-group">
          &nbsp;
        </div>
        <div className="form-group">
          &nbsp;
        </div>
        <div className="form-group">
          &nbsp;
        </div>
      </ProjectContext.Provider>
    </div>
  )
}

export default Portfolio;