import React from 'react';
import "../Project/style.css"

function Project(props) {
    return (
      <div className="project-container">
        <h4>{props.title}</h4>
        <div className="links">
          <a href={props.deployedLink}>Deployed Link | </a>
          <a href={props.githubLink}>GitHub Repository</a>
        </div>
        <a href={props.deployedLink}>
        <img src={props.imgName} width="350" className="img-responsive image-thumbnail" alt="Portfolio Project" />
        </a>
      </div>
    )
  }

  export default Project;