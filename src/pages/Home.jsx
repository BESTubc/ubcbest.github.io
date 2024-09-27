import React from "react";
import Footer from "../components/Footer";
import Project from "../components/HorizontalProject";
import HorizontalProject from "../components/HorizontalProject";
import SmallProject from "../components/SmallProject";
import Button from "../components/Button";

import hero_pic from "/Users/johngrey/ubc-best/src/images/front_page.png";
import who_we_are from "/Users/johngrey/ubc-best/src/images/who_we_are.png";

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
            <h1> UBC BEST</h1>
            <h2> Biomedical Engineering Design Team</h2>
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
            Nulla rutrum, augue eget venenatis vulputate, elit purus tempus
            risus, in semper ipsum eros non lacus. Duis vehicula lorem non purus
            porttitor gravida. Phasellus vitae urna nec mauris aliquet
            hendrerit. Vestibulum id est ac risus sodales eleifend. Donec
            malesuada eros vitae convallis porta. In in turpis vulputate purus
            euismod consectetur. Donec vel pellentesque magna.
          </p>
          <p /* class="hidden item"*/ >
            Sed sit amet neque condimentum est suscipit lobortis vitae eget
            ante. Sed aliquam nibh sed laoreet auctor. Aliquam sagittis
            porttitor sem. Cras ullamcorper ex erat, eget sagittis ante mattis
            eget. Nam gravida sed risus ut ultrices. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Fusce quis elit in magna ultrices blandit. Proin
            ultricies porttitor nibh, non pretium mi.
          </p>
          <img src={who_we_are} /* class="hidden item"*/  />
        </div>
      </div>

      <hr />

      {/* PROJECTS */}
      <div id="projects">
        <div>
          <h1> OUR PROJECTS </h1>
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
