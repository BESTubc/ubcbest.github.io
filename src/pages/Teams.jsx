import React from "react";

import external from "/Users/johngrey/ubc-best/src/images/co-captain-external.png";
import operations from "/Users/johngrey/ubc-best/src/images/co-captain-operations.png";
import projects from "/Users/johngrey/ubc-best/src/images/co-captain-projects.png";

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

const Teams = () => {
  const scrollFeatures = getScrollFeatures();

  React.useEffect(() => {
      getScrollFeatures({ type: 'recruitment' });
    }, [scrollFeatures]);

  return (
    <div>
      <div className="teams-header">
        <h1>UBC BEST Leadership</h1>
      </div>
      <hr className="line" />

      <div className="teams-headshots">
          <h2>Captains</h2>
          <div className="captains">
            <ProfileCard size="350px" color="darkblue" class="hidden item" name="Dundee Wang" position="Co-Captain External" image={external}/>
            <ProfileCard size="350px" color="darkblue" class="hidden item" name="Sze Lok Ng" position="Co-Captain Projects" image={projects}/>
            <ProfileCard size="350px" color="darkblue" class="hidden item" name="Alexandra Murphy" position="Co-Captain Operations" image={operations}/>
          </div>

          <h2>Project Leads</h2>
          <div className="teams">
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Rohan Birk" position="ENABLE" image="https://picsum.photos/200/199"/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Angie Peng" position="ENABLE" image="https://picsum.photos/200/199"/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Dundee Wang" position="SportsMed" image={external}/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Alexandra Murphy" position="SportsMed" image={operations}/>
            
          </div>
          <div className="teams">
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Kendall Mooney" position="Lifeline" image="https://picsum.photos/199/199"/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Kisa Naqvi" position="Lifeline" image="https://picsum.photos/199/199"/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Priyanshu Mahey" position="MINT" image="https://picsum.photos/201/200"/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Sze Log Ng" position="MINT" image={projects}/>
          </div>
          <div className="teams"> 
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Yasmine Bellahcen" position="BIT" image="https://picsum.photos/201/200"/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Brianna Tsuyuki" position="BIT" image="https://picsum.photos/200/200"/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Wesley Chan" position="M2M" image="https://picsum.photos/199/201"/> 
          </div>

          <h2>Mentorship, Sponsorship and Media</h2>
          <div className="teams">
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Ben Magyar" position="Co-Head of Mentorship" image="https://picsum.photos/200/199"/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Ceana Macatula" position="Co-Head of Mentorship" image="https://picsum.photos/200/199"/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Alicia Fung" position="Head of Media, Workshop" image="https://picsum.photos/199/201"/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Kisa Naqvi" position="Outreach and Engagement" image="https://picsum.photos/199/201"/>
            
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Teams;
