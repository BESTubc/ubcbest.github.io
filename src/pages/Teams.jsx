import React from "react";

import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";

const Teams = () => {
  return (
    <div>
      <div className="teams-header">
        <h1>UBC BEST Leadership</h1>
      </div>
      <hr className="line" />

      <div className="teams-headshots">
          <h2>Captains</h2>
          <div className="captains">
          <ProfileCard name="Tim Cook" position="CEO" image="https://picsum.photos/200/200"/>
          <ProfileCard name="Katherine Adams" position="Senior VP General" image="https://picsum.photos/201/200"/>
          <ProfileCard name="Eddie Cue" position="Senior VP Services" image="https://picsum.photos/200/201"/>
          <ProfileCard name="Craig Federhigi" position="Senior VP Software" image="https://picsum.photos/199/200"/>
          </div>
          <h2>Sub Teams</h2>
          <div className="teams">
          <ProfileCard name="MINT" position="" image="https://picsum.photos/200/199"/>
          <ProfileCard name="ENABLE" position="" image="https://picsum.photos/199/201"/>
          <ProfileCard name="M2M" position="" image="https://picsum.photos/201/201"/>
          <ProfileCard name="Project Lifeline" position="" image="https://picsum.photos/199/199"/>
          </div>
          

      </div>
      <Footer />
    </div>
  );
};

export default Teams;
