import React from "react";
import { useState } from "react";

const AboutUsCard = (props) => {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => setToggle(!toggle);

  return (
    <div className="about-us-card">
      <div className="about-us-card-info">
        <div>
          <h2>{props.title}</h2>
          <h3>{props.subtitle}</h3>
        </div>
        <div className="more-button">
          <button onClick={onToggle}>+</button>
        </div>
      </div>
      <div className="about-us-card-description">
        { toggle ? <p>{props.description}</p> : <img class="about-us-image" src={props.link} alt={props.alt}/>}
      </div>
    </div>
  );
};

export default AboutUsCard;
