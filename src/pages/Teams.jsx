import React from "react";

import {Link } from "react-router-dom";
import Footer from "../components/Footer";

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

const Teams = () => {
  const scrollFeatures = getScrollFeatures();

  React.useEffect(() => {
    getScrollFeatures({ type: "recruitment" });
  }, [scrollFeatures]);

  return (
    <div>
      <div className="teams-headshots">
        <div className="teams-header">
          <h1>Subteams</h1>
        </div>
        <hr />
        <div className="teams">
          <div className="team-card">
            <Link className="team-link" to="/teams/enable">
              <h3>ENABLE</h3>
            </Link>
            <p>
              Custom, client-focused assistive device initiatives in
              collaboration with the Vancouver chapter of the Tetra Society.
              Past projects include a blanket mover and an adaptive game
              controller.
            </p>
          </div>
          <iframe
            src="https://drive.google.com/file/d/1fgfqObP2CcCpjG7xRc8szflSDhjtZZvx/preview"
            width="640"
            height="480"
            allow="autoplay"
            title="ENABLE"
          ></iframe>
        </div>

        <hr />

        <div className="teams">
          <div className="team-card">
            <Link className="team-link" to="/teams/sportsmed">
              <h3>SportsMed</h3>
            </Link>
            <p>
              SportsMed analyzes common sports injuries and how we can help
              prevent and recover from these injuries.
            </p>
          </div>
          <iframe
            src="https://drive.google.com/file/d/1nNUXwTF8uefKxN7C1j7r5JEtPy7Gwt5c/preview"
            width="640"
            height="480"
            allow="autoplay"
            title="SportsMed"
          ></iframe>
        </div>

        <hr />

        <div className="teams">
          <div className="team-card">
            <Link className="team-link" to="/teams/lifeline">
              <h3>Lifeline</h3>
            </Link>
            <p>
              Lifeline is a team dedicated to adapting and developing medical
              technologies for low- income settings to help imrpove
              accessibility of healthcare for all.
            </p>
          </div>
          <iframe
            src="https://drive.google.com/file/d/1T5JZvGHMjW3wg_Rq1PXrJXHiQB8Lc7W1/preview"
            width="640"
            height="480"
            allow="autoplay"
            title="Lifeline"
          ></iframe>
        </div>

        <hr />

        <div className="teams">
          <div className="team-card">
            <Link className="team-link" to="/teams/mint">
              <h3>MINT</h3>
            </Link>
            <h4>Multifaceted Innovations in Neurotechnology</h4>
            <p>
              Exploring accessible neurotechnology tusing EEG and annual
              submissions to the international NeuroTechX competition.
            </p>
          </div>
          <iframe
            src="https://drive.google.com/file/d/1MWdRYMI1WCBESAi_ptAqyyDhD00TcJC0/preview"
            width="640"
            height="480"
            allow="autoplay"
            title="MINT"
          ></iframe>
        </div>

        <hr />

        <div className="teams">
          <div className="team-card">
            <Link className="team-link" to="/teams/bit">
              <h3>BIT</h3>
            </Link>
            <h4>Biochemical Innovation Team</h4>
            <p>
              BIT investigates the impacts of Rutin and Quercetin on pancreatic
              β-Cell apoptosis and insulin secretion in primary human Islets and
              stem cell- derived islets
            </p>
          </div>
          <iframe
            src="https://drive.google.com/file/d/15w1RSQzA43uOs5-Ywp5VaGRQ3Qt-V5Bw/preview"
            width="640"
            height="480"
            allow="autoplay"
            title="BIT"
          ></iframe>
        </div>

        <hr />

        <div className="teams">
          <div className="team-card">
            <Link className="team-link" to="/teams/m2m">
              <h3>M2M</h3>
            </Link>
            <h4>Multiple Sclerosis to Movement</h4>
            <p>
              An MS-centric project aims at developing a therapy glove in
              combination with an interactive gaming interface to create a more
              motivating and engaging rehabilitation experience.
            </p>
          </div>
          <iframe
            src="https://drive.google.com/file/d/17KcGX60c8MAD977-DXelRLRNIlLJ8cse/preview"
            width="640"
            height="480"
            allow="autoplay"
            title="M2M"
          ></iframe>
        </div>

        <hr />

        <div className="teams">
          <div className="team-card">
            <Link className="team-link" to="/teams/mentorship">
              <h3>Mentorship</h3>
            </Link>
            <p>
              Open to any 1st and 2nd year students who are enthusiastic and
              willing to learn! We help first and second year students develop
              their technical, professional and personal skills to smoothly
              integrate into the team as a full member at the end of one year.
            </p>
          </div>
          <iframe
            src="https://drive.google.com/file/d/11HbkE8qDOcQsIfrqI1dGSdJIL7IhDz19/preview"
            width="640"
            height="480"
            allow="autoplay"
            title="Mentorship"
          ></iframe>
        </div>

        <hr />

        <div className="teams">
          <div className="team-card">
            <Link className="team-link" to="/teams/media">
              <h3>Media</h3>
            </Link>
            <p></p>
          </div>
          <iframe
            src="https://drive.google.com/file/d/16oTu4mwE5CbcHktJ1rSrF0FTYuCbcOzC/preview"
            width="640"
            height="480"
            allow="autoplay"
            title="Media"
          ></iframe>
        </div>

        <hr />
      </div>
      <Footer />
    </div>
  );
};

export default Teams;
