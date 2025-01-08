import React from "react";

import Footer from "../components/Footer";
import AboutUsCard from "../components/AboutUsCard";

const About = () => {
  return (
    <div>
      <div className="about-us-container">
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <h1 style={{marginRight: "10px"}}>ABOUT</h1>
          <h1 style={{color:"red", marginLeft: "10px"}}>US</h1>
        </div>
        
        <div style={{width:"50%", marginTop: "50px"}}>
          <h3 style={{color: "red"}}>
            <strong>Who We Are</strong>
          </h3>
          <h2 style={{marginTop: "20px"}}>UBC BEST is a multidisciplinary team that focuses on developing context-appropriate solutions to medical challenges in our local communities and around the world.{" "}</h2>
        </div>
        <div style={{width:"50%", marginTop: "50px"}}>
          <h3 style={{color: "red"}}>
            <strong>Mission Statement</strong>
          </h3>
          <h2 style={{marginTop: "20px"}}>To design innovative solutions that improve lives by combining diverse talents and knowledge from multiple disciplines, driven by a commitment to collaboration, inclusivity, and impact.</h2>
        </div>
        
      </div>
      <div className="about-mini-container">
        <AboutUsCard
          title="Mentorship Program"
          subtitle="Open to any 1st and 2nd year students who are enthusiastic and willing to learn!"
          description="We help first and second year students develop their technical, professional and 
          personal skills to smoothly integrate into the team as a full member at the end of one year.
          Meetings happen monthly workshops and weekly sub-team meetings for 2- 4 hours once a week, 
          project shadowing and both 1-on-1 and/or group mentorship depending on subteam. Monthly 30min 
          - 1 hour BESTie advice sessions to debrief and ask upper years for advice/guidance on any topic."
          iframe="https://drive.google.com/file/d/13cs_0W3hyynUh0bb27FO1qgwMANyO9_s/preview"
        />
        {/* <AboutUsCard
          title="Compliance at Apple"
          description="A number of compliance functions are deeply integrated into our business organization. Apple’s Compliance and Business Conduct team focuses on Business Conduct, Political Compliance, Export and Sanctions Compliance, Health Compliance, Antitrust Compliance, and Anti-Corruption Compliance."
        />
        <AboutUsCard
          title="Bringing Policy to Life"
          description="Every Apple employee is required to complete mandatory annual Business Conduct training. We offer a range of additional resources for employees to address questions and concerns, including the Business Conduct Helpline and the Business Conduct website."
        />
        <AboutUsCard
          title="Being Accountable"
          description="We conduct internal and third-party independent assessments of our programs to ensure they are effective. We make changes to our policies and our training to reflect emerging trends. Apple’s Chief Compliance Officer provides regular updates to the Audit and Finance Committee of the Board of Directors."
        /> */}
      </div>

      <Footer />
    </div>
  );
};

export default About;
