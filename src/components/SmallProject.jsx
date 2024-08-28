import React from "react";
import Button from "./Button";

const SmallProject = (props) => {
  return (
    <div class="small-projects-container">
      <div>
        <h2>{props.projectTitle}</h2>
        <h3>{props.hook}</h3>
        <div>
          <Button title={props.learnMore} mode="light-button"/>
        </div>
        <img src="https://picsum.photos/600/399" className="project-img" />
      </div>
    </div>
  );
};

export default SmallProject;
