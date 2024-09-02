import React from "react";

import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import Button from "../components/Button";

const Sponsors = () => {
//   var sponsors = document.getElementById("sponsors");

//   function fadeOutOnScroll(element) {
//     if (!element) {
//       return;
//     }

//     var distanceToTop =
//       window.pageYOffset + element.getBoundingClientRect().top;
//     var elementHeight = element.offsetHeight;
//     var scrollTop = document.documentElement.scrollTop;

//     var opacity = 1;

//     if (scrollTop > distanceToTop) {
//       opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
//     }

//     if (opacity >= 0) {
//       element.style.opacity = opacity;
//     }
//   }

//   function scrollHandler() {
//     fadeOutOnScroll(sponsors);
//   }

//   window.addEventListener("scroll", scrollHandler);

  return (
    <div id="sponsors">
        <h1>SPONSORS</h1>
      <div class="sponsor-container">
        <h2 style={{textAlign: "right", width:"37%"}}>THANK YOU TO </h2>

        <div class="tier-container">
          <h3>Gold Tier</h3>
          <ProfileCard name="Tetra Society" image="https://picsum.photos/300" />
          <h3>Silver Tier</h3>
          <ProfileCard
            name="Simon Cox Competition"
            image="https://picsum.photos/299"
          />
          <ProfileCard
            name="Technology for Living"
            image="https://picsum.photos/298"
          />
          <h3>Bronze Tier</h3>
          <ProfileCard
            name="Makers Making Change"
            image="https://picsum.photos/301"
          />
        </div>
        <h2>FOR SPONSORING</h2>
      </div>
      <Button mode="sponsor dark-button" title="SPONSOR PACKAGE"/>
      <Footer />
    </div>
  );
};

export default Sponsors;
