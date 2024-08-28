import React from "react";
import Footer from "../components/Footer";
import Project from "../components/HorizontalProject";
import HorizontalProject from "../components/HorizontalProject";
import SmallProject from "../components/SmallProject";
import Button from "../components/Button";

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <div id="hero">
        <div class="hero-container">
          <div class="hero-text">
            <h1> UBC BEST</h1>
            <h2> Biomedical Engineering Design Team</h2>
            <h3>the "best" student design team</h3>
          </div>
          <div>
            <img src="https://picsum.photos/600" class="hero-pic" />
          </div>
        </div>
      </div>

      <div id="home-about">
        <div>
          <h1>WHO WE ARE</h1>
          <p>
            Nulla rutrum, augue eget venenatis vulputate, elit purus tempus
            risus, in semper ipsum eros non lacus. Duis vehicula lorem non purus
            porttitor gravida. Phasellus vitae urna nec mauris aliquet
            hendrerit. Vestibulum id est ac risus sodales eleifend. Donec
            malesuada eros vitae convallis porta. In in turpis vulputate purus
            euismod consectetur. Donec vel pellentesque magna.
          </p>
          <p>
            Sed sit amet neque condimentum est suscipit lobortis vitae eget
            ante. Sed aliquam nibh sed laoreet auctor. Aliquam sagittis
            porttitor sem. Cras ullamcorper ex erat, eget sagittis ante mattis
            eget. Nam gravida sed risus ut ultrices. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Fusce quis elit in magna ultrices blandit. Proin
            ultricies porttitor nibh, non pretium mi.
          </p>
          <img src="https://picsum.photos/1000/400" />
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
