import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const HorizontalProject = (props) => {
  // const linkName = {`\${props.projectTitle}`};

  return (
    <div class="horizontal-projects-container">
      <div>
        <h2>{props.projectTitle}</h2>
        <h3>{props.hook}</h3>
        <div>
          <Link to="/about"><Button title={props.learnMore} mode="dark-button"/></Link>
          
        </div>
        <img src="https://picsum.photos/600/400" className="project-img" />
      </div>
    </div>
  );
};

export default HorizontalProject;
