import React from "react";

import external from "../images/headshots/co-captain-external.png";
import operations from "../images/headshots/co-captain-operations.png";
import projects from "../images/headshots/co-captain-projects.png";

import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";

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

const People = () => {
  const scrollFeatures = getScrollFeatures();

  React.useEffect(() => {
      getScrollFeatures({ type: 'recruitment' });
    }, [scrollFeatures]);

  return (
    <div>
      <div className="teams-header">
        <h1>Leadership</h1>
      </div>
      <hr className="line" />

      <div className="teams-headshots">
          <h2>Captains</h2>
          <div className="captains">
            <ProfileCard height="250px" width="250px" color="red" class="hidden item" name="Dundee Wang" position="Co-Captain External" image={external}/>
            <ProfileCard height="250px" width="250px" color="red" class="hidden item" name="Sze Lok Ng" position="Co-Captain Projects" image={projects}/>
            <ProfileCard height="250px" width="250px" color="red" class="hidden item" name="Alexandra Murphy" position="Co-Captain Operations" image={operations}/>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default People;
