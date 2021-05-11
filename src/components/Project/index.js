import React from 'react';
import "../Project/style.css"

function Project(props) {
    const imgSrc = `./assets/${props.imgName}.png`
    return (
      <div className="project-container">
        <h4>{props.title}</h4>
        <div className="links">
          <a href={props.deployedLink}>Deployed Link | </a>
          <a href={props.githubLink}>GitHub Repository</a>
        </div>
        <a href={props.deployedLink}>
          <img src={imgSrc} width="350" className="img-responsive image-thumbnail" alt="Project" />
        </a>
      </div>
    )
  }

  export default Project;