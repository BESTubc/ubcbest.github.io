import React from "react";
import Footer from "../components/Footer";
import Project from "../components/HorizontalProject";
import HorizontalProject from "../components/HorizontalProject";
import SmallProject from "../components/SmallProject";
import Button from "../components/Button";

import hero_pic from "../images/front_page.png";
import who_we_are from "../images/who_we_are.png";

function getScrollFeatures() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
}

const Home = () => {
  const scrollFeatures = getScrollFeatures();

  React.useEffect(() => {
    getScrollFeatures({ type: "recruitment" });
  }, [scrollFeatures]);
  return (
    <div>
      {/* HERO */}
      <div id="hero">
        <div class="hero-container hidden">
          <div class="hero-text">
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
              <h1> UBC</h1> 
              <h1 style={{color: "red"}}> BEST</h1>  
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
              <h2 style={{color:"red"}}>B</h2>
              <h2>iomedical </h2>
              <h2 style={{color:"red", marginLeft: "3%"}}> E</h2>
              <h2>ngineering </h2>
              <h2 style={{color:"red", marginLeft: "3%"}}> S</h2>
              <h2>tudent </h2>
              <h2 style={{color:"red", marginLeft: "3%"}}> T</h2>
              <h2>eam</h2>
            </div>
            <h3>the "best" student design team</h3>
          </div>
          <div>
            <img src={hero_pic} class="hero-pic" />
          </div>
        </div>
      </div>

      <div id="home-about">
        <div>
          <h1 /* class="hidden item"*/ >WHO WE ARE</h1>
          <p /* class="hidden item"*/ >
            The "BEST" Design Team.
          </p>
          <img src={who_we_are} /* class="hidden item"*/  />
        </div>
      </div>

      {/* HIGHTLIGHTS */}
      <div id="projects">
        <div>
          <h1> RECENT HIGHLIGHTS </h1>
          <HorizontalProject
            projectTitle="Adjustable Portable Tabletop"
            learnMore="Learn more"
            hook="An inclusive mobile wheelchair tray for our client."
          />
          <div className="projects-container">
            <SmallProject
              projectTitle="Audio Biofeedback Device"
              learnMore="Learn more"
              hook="A device that detects muscle activation and notifies user."
            />
            <SmallProject
              projectTitle="Co-assist Device"
              learnMore="Learn more"
              hook="A device that is easily adjustable and allows users to have more independence."
            />
          </div>
        </div>

        {/* <div>
          <Button mode="light-button" title="MEET THE TEAM" />
        </div> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
