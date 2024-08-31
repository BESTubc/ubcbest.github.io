import React from "react";

import Footer from "../components/Footer";
import AboutUsCard from "../components/AboutUsCard";

const About = () => {
  return (
    <div>
      <div className="about-us-container">
        <h1>ABOUT US</h1>
        <p>
          Apple conducts business ethically, honestly, and in full compliance
          with the law. We believe that how we conduct ourselves is as critical
          to Apple’s success as making the best products in the world. Our
          Compliance and Business Conduct policies are foundational to how we do
          business and how we put our values into practice every day.{" "}
        </p>
        <h2>"We do the right thing, even when it's not easy."</h2>
        <h3>
          <strong>Tim Cook</strong>
        </h3>
      </div>
      <div className="container">
        <AboutUsCard
          title="Our Business Conduct Policy"
          subtitle="Honesty, Respect, Confidentiality, and Compliance"
          description="Our Business Conduct Policy sets out our ethical requirements for our employees. Each of our employees must certify that they have read and understand the policy when they join Apple, and again each year. Violations of the policy are taken seriously and may result in disciplinary action, up to and including termination of employment."
        />
        <AboutUsCard
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
        />
      </div>

      <Footer />
    </div>
  );
};

export default About;
