import React from "react";

import Slideshow from "../components/Slideshow";
import ProfilePanel from "../components/ProfilePanel";
import Featurette from "../components/Featurette";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Slideshow />
      <ProfilePanel />
      <Featurette />
      <Footer />
    </div>
  );
};

export default About;
