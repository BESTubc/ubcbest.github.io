import React from "react";

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

  React.useEffect(() => {
    getScrollFeatures({ type: "recruitment" });
  }, [scrollFeatures]);

  return (
    <div class="recruitment">
      <div class="recruitment-container hidden">
        <h1>Join us. Be the BEST.</h1>
        <Button mode="call-to-action" title="LEARN MORE" />
      </div>
      <div class="recruitment-container hidden">
        <h2>
          This is where individual imaginations gather together, committing the
          values that lead to great work. Here you'll do more than join
          something --you'll add something.
        </h2>
      </div>
      <div class="recruitment-container hidden">
        <h1>
          Join a team and inspire <br /> the work.
        </h1>
        <h3>Discover how you can make an impact.</h3>
      </div>
      <div class="quote">
        <h2>
          "We aren’t merely creating products. We’re creating something magical
          for the person who uses it."
        </h2>
        <p>Ehsan, Engineering Manager</p>
      </div>
      <div class="quote">
        <h2>
          "At Apple, you can unapologetically be yourself and grow and thrive."
        </h2>
        <p>Sujin, Apple Store</p>
      </div>
      <Button mode="call-to-action" title="JOIN US"/>
      <Footer />
    </div>
  );
};

export default Recruitment;
