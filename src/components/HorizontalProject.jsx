import React from "react";
import Button from "./Button";

const HorizontalProject = (props) => {
  return (
    <div class="horizontal-projects-container">
      <div>
        <h2>{props.projectTitle}</h2>
        <h3>{props.hook}</h3>
        <div>
          <Button title={props.learnMore} mode="dark-button"/>
        </div>
        <img src="https://picsum.photos/600/400" className="project-img" />
      </div>
    </div>
  );
};

export default HorizontalProject;
