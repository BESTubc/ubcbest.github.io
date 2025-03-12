import React from "react";

import Footer from "../components/Footer";
import Slider from "../components/Slider";

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
              <h1> UBC <span style={{color: "red"}}>BEST</span></h1>
              <h2><span style={{color: "red"}}>B</span>iomedical <span style={{color: "red"}}>E</span>ngineering <span style={{color: "red"}}>S</span>tudent <span style={{color: "red"}}>T</span>eam</h2>
              <h3>the "best" student design team</h3>
          </div>
          <div class="container">
            <iframe
              src="https://drive.google.com/file/d/1Za3SHpv2oH8Yu7b2G4ruStDI0qWqWHmG/preview"
              allow="autoplay"
              class="hero-pic"
              title="BIT Team Photo"
            ></iframe>
          </div>
        </div>
      </div>

      <div id="home-about">
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>WHO <span style={{color: "red"}}>WE</span> ARE</h1>
          </div>

          <p /* class="hidden item"*/>The "BEST" Design Team...</p>
          <p>
            Just kidding (well not really). UBC BEST is a multidisciplinary
            design team of students from Applied Science (Engineering), Science,
            the Sauder School of Business, Land and Food Systems, and Medicine.
            We consist of 6 subteams and are focused on developing
            context-appropriate solutions to medical challenges locally and
            around the world.
          </p>
          <iframe
            src="https://drive.google.com/file/d/1Chr9da6t7FpKA_UnKrpPWvZ-PVKPh1eE/preview"
            allow="autoplay"
            class="who-we-are-pic"
            title="Mentorship Leads Photo"
          ></iframe>
        </div>
      </div>
      

      {/* HIGHTLIGHTS */}
      <div id="projects">
        <div className="container">
        <h1>RECENT <span style={{color: "red"}}>HIGHLIGHTS</span></h1>
        </div>
        <Slider />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
