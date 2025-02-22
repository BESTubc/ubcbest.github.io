import React from "react";
import { useState } from "react";

import Footer from "../components/Footer";
import Button from "../components/Button";

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

const Recruitment = () => {
  const scrollFeatures = getScrollFeatures();
  const [ recruitingStatus, setRecruitingStatus ] = useState(false);

  React.useEffect(() => {
    getScrollFeatures({ type: "recruitment" });
  }, [scrollFeatures]);

  return (
    <div class="recruitment">
      <div class="recruitment-container hidden">
        <h1>Join us. Be the BEST.</h1>
        <a href="/recruitment/#join-now" ><Button mode="call-to-action" title="LEARN MORE" /></a>
        <div class="responsive-iframe">
        <iframe src="https://drive.google.com/file/d/1nNUXwTF8uefKxN7C1j7r5JEtPy7Gwt5c/preview" allow="autoplay"></iframe>
          </div>
      </div>
      <div class="recruitment-container hidden">
        <h1>
          Join a team and inspire <br /> the work.
        </h1>
        <h3>Discover how you can make an impact.</h3>
        <div class="responsive-iframe"><iframe src="https://drive.google.com/file/d/1MWdRYMI1WCBESAi_ptAqyyDhD00TcJC0/preview" allow="autoplay"></iframe></div>
        
      </div>
      <div class="testimonials"><div class="quote">
        <h2>
          "We aren’t merely creating products. We’re creating the future
          for people."
        </h2>
        <p>Ehsan, BIT Team Lead</p>
      </div>
      <div class="quote">
        <h2>
          "At UBC BEST, you can unapologetically be yourself and grow and thrive."
        </h2>
        <p>Sujin, ENABLE Team Lead</p>
      </div></div>
      
      <div id="join-now">
      {recruitingStatus ? <Button mode="call-to-action" title="JOIN US"/> : <h2>Sorry, we’re not recruiting at the moment but check back later!</h2>}
      </div>
      <Footer />
    </div>
  );
};

export default Recruitment;
