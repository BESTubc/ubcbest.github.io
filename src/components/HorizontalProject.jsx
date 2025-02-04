import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const HorizontalProject = (props) => {
  // const linkName = {`\${props.projectTitle}`};

  return (
    <div class="horizontal-projects-container">
      <div class="projects-container">
        <div class="container">
          <h2>{props.projectTitle}</h2>
          <h3>{props.hook}</h3>
        </div>
        
        <div>
          <Link to="/about"><Button title={props.learnMore} mode="dark-button"/></Link>
          <div class="project-img">
            
            <img src={props.link}/>
          </div>
        </div>
          
      </div>
    </div>
  );
};

export default HorizontalProject;
