import React from "react";
import { Link } from "react-router-dom";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <div>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <Link className="highlights-link" to={`/highlights/${slide.path}`}>
            <img className="slide-image" src={slide.urls} alt="" />
            <h2 className="slide-title">{slide.title}</h2>
            <h3 className="slide-text">{slide.description}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SliderContent;
