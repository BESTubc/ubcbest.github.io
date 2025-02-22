import React from "react";

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
            <h3>ENABLE</h3>
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
          ></iframe>
        </div>

        <hr />

        <div className="teams">
          <div className="team-card">
            <h3>SportsMed</h3>
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
          ></iframe>
        </div>

        <hr />

        <div className="teams">
          <div className="team-card">
            <h3>Lifeline</h3>
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
          ></iframe>
        </div>

        <hr />

        <div className="teams">
          <div className="team-card">
            <h3>MINT</h3>
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
          ></iframe>
        </div>

        <hr />

        <div className="teams">
          <div className="team-card">
            <h3>BIT</h3>
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
          ></iframe>
        </div>

        <hr />

        <div className="teams">
          <div className="team-card">
            <h3>M2M</h3>
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
          ></iframe>
        </div>

        <hr />

        <div className="teams">
          <div className="team-card">
            <h3>Mentorship</h3>
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
          ></iframe>
        </div>

        <hr />

        <div className="teams">
          <div className="team-card">
            <h3>Media</h3>
            <p></p>
          </div>
          <iframe
            src="https://drive.google.com/file/d/16oTu4mwE5CbcHktJ1rSrF0FTYuCbcOzC/preview"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>

        <hr />

        {/* <div className="teams">
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
          </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Teams;
