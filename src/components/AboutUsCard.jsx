import React from "react";

const AboutUsCard = (props) => {
  return (
    <div className="about-us-card">
      <div className="about-us-card-info">
        <div>
          <h2>{props.title}</h2>
          <h3>{props.subtitle}</h3>
        </div>
        <div className="more-button">
          <button>+</button>
        </div>
      </div>
      <div className="about-us-card-description">
        <p>{props.description}</p>
        <img src={props.image}/>
      </div>
    </div>
  );
};

export default AboutUsCard;
