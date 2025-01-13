import React from "react";

import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import Button from "../components/Button";
import SponsorshipPackage from "../files/2023-2024_BEST_Sponsorship_Package.pdf";
import ECE from "../images/sponsors/ece_logo.png";
import ME from "../images/sponsors/mecheng_logo.jpeg";
import AS from "../images/sponsors/as_logo.png";
import SBME from "../images/sponsors/sbme_logo.jpg";
import MED from "../images/sponsors/med_logo.png";
import ESHIP from "../images/sponsors/eship_logo.jpg";
import NS from "../images/sponsors/neilsquire_logo.png";
import MMC from "../images/sponsors/mmc_logo.jpg";
import BMEGA from "../images/sponsors/bmega_logo.png";
import TETRA from "../images/sponsors/tetra_logo.png";
import ICCHANGE from "../images/sponsors/icchange_logo.webp";
import HH from "../images/sponsors/hatching_logo.png";
import NGDI from "../images/sponsors/ngdi_logo.png";

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
        <h2 style={{ textAlign: "right", width: "37%" }}>THANK YOU TO </h2>

        <div class="tier-container">
          <ProfileCard
            image={ECE}
            height="250px"
            width="300px"
          />
          <ProfileCard
            image={ME}
            height="300px"
            width="300px"
          />
          <ProfileCard
            image={AS}
            height="300px"
            width="300px"
          />
          <ProfileCard
            image={SBME}
            height="400px"
            width="300px"
          />
          <ProfileCard
            image={MED}
            height="300px"
            width="300px"
          />
          <ProfileCard
            image={ESHIP}
            height="100px"
            width="300px"
          />
          <ProfileCard
            image={NS}
            height="300px"
            width="300px"
          />
          <ProfileCard
            image={MMC}
            height="125px"
            width="300px"
          />
          <ProfileCard
            image={BMEGA}
            height="300px"
            width="300px"
          />
          <ProfileCard
            image={TETRA}
            height="200px"
            width="300px"
          />
          <ProfileCard
            image={ICCHANGE}
            height="100px"
            width="300px"
          />
          <ProfileCard
            image={HH}
            height="300px"
            width="300px"
          />
          <ProfileCard
            image={NGDI}
            height="120px"
            width="300px"
          />
        </div>
        <h2>FOR SPONSORING</h2>
      </div>
      <a
        href={SponsorshipPackage}
        download="BEST_Sponsorship_Package"
        target="_blank"
      >
        <Button mode="sponsor dark-button" title="Become a Sponsor" />
      </a>
      <Footer />
    </div>
  );
};

export default Sponsors;
