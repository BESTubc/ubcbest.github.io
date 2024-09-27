import React from "react";

import external from "../images/headshots/co-captain-external.png";
import operations from "../images/headshots/co-captain-operations.png";
import projects from "../images/headshots/co-captain-projects.png";

import enable_lead_one from "../images/headshots/rohan_birk.png";
import enable_lead_two from "../images/headshots/angie_peng.png";
import lifeline_lead_one from "../images/headshots/kendall_mooney.png";
import lifeline_lead_two from "../images/headshots/kisa_naqvi.png";
import mint_lead_one from "../images/headshots/priyanshu_mahey.png";
import mint_lead_two from "../images/headshots/co-captain-projects.png";
import bit_lead_one from "../images/headshots/yasmine_bellahcen.png";
import bit_lead_two from "../images/headshots/brianna_tsuyuki.png";
import m2m_lead_one from "../images/headshots/wesly_chan.png";
import mentorship_lead_one from "../images/headshots/ben_magyar.png";
import mentorship_lead_two from "../images/headshots/ceana_macatula.png";
import media_lead from "../images/headshots/alicia_fung.png";
import outreach_lead from "../images/headshots/kisa_naqvi.png";

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
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Rohan Birk" position="ENABLE" image={enable_lead_one}/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Angie Peng" position="ENABLE" image={enable_lead_two}/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Dundee Wang" position="SportsMed" image={external}/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Alexandra Murphy" position="SportsMed" image={operations}/>
            
          </div>
          <div className="teams">
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Kendall Mooney" position="Lifeline" image={lifeline_lead_one}/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Kisa Naqvi" position="Lifeline" image={lifeline_lead_two}/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Priyanshu Mahey" position="MINT" image={mint_lead_one}/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Sze Log Ng" position="MINT" image={mint_lead_two}/>
          </div>
          <div className="teams"> 
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Yasmine Bellahcen" position="BIT" image={bit_lead_one}/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Brianna Tsuyuki" position="BIT" image={bit_lead_two}/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Wesley Chan" position="M2M" image={m2m_lead_one}/> 
          </div>

          <h2>Mentorship, Sponsorship and Media</h2>
          <div className="teams">
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Ben Magyar" position="Co-Head of Mentorship" image={mentorship_lead_one}/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Ceana Macatula" position="Co-Head of Mentorship" image={mentorship_lead_two}/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Alicia Fung" position="Head of Media, Workshop" image={media_lead}/>
            <ProfileCard size="200px" color="darkblue" class="hidden item" name="Kisa Naqvi" position="Outreach and Engagement" image={outreach_lead}/>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Teams;
