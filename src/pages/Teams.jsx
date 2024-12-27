import React from "react";

import external from "../images/headshots/co-captain-external.png";
import operations from "../images/headshots/co-captain-operations.png";
import projects from "../images/headshots/co-captain-projects.png";

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
        <h1>Subteams</h1>
      </div>
      <hr className="line" />

      <div className="teams-headshots">
          <div className="teams">
            <div style={{width: "50%"}}>
              <h3>ENABLE</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nisi vitae elit fringilla fermentum eget quis odio.
              Aliquam eu nulla a risus scelerisque ultrices sed molestie ex. Nam pretium commodo ipsum at semper. Praesent ornare pulvinar
                porttitor. Curabitur condimentum laoreet accumsan. Morbi venenatis metus ac ligula porta, non gravida leo fermentum. Mauris 
                nec dui eu eros aliquam fermentum.
              </p>
            </div>
            <iframe src="https://drive.google.com/file/d/1fgfqObP2CcCpjG7xRc8szflSDhjtZZvx/preview" width="640" height="480" allow="autoplay"></iframe>
          </div>

          <hr />

          <div className="teams">
            <div style={{width: "50%"}}>
              <h3>SportsMed</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nisi vitae elit fringilla fermentum eget quis odio.
              Aliquam eu nulla a risus scelerisque ultrices sed molestie ex. Nam pretium commodo ipsum at semper. Praesent ornare pulvinar
                porttitor. Curabitur condimentum laoreet accumsan. Morbi venenatis metus ac ligula porta, non gravida leo fermentum. Mauris 
                nec dui eu eros aliquam fermentum.
              </p>
            </div>
            <iframe src="https://drive.google.com/file/d/1nNUXwTF8uefKxN7C1j7r5JEtPy7Gwt5c/preview" width="640" height="480" allow="autoplay"></iframe>
          </div>

          <hr />

          <div className="teams">
            <div style={{width: "50%"}}>
              <h3>Lifeline</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nisi vitae elit fringilla fermentum eget quis odio.
              Aliquam eu nulla a risus scelerisque ultrices sed molestie ex. Nam pretium commodo ipsum at semper. Praesent ornare pulvinar
                porttitor. Curabitur condimentum laoreet accumsan. Morbi venenatis metus ac ligula porta, non gravida leo fermentum. Mauris 
                nec dui eu eros aliquam fermentum.
              </p>
            </div>
            <iframe src="https://drive.google.com/file/d/1T5JZvGHMjW3wg_Rq1PXrJXHiQB8Lc7W1/preview" width="640" height="480" allow="autoplay"></iframe>
          </div>

          <hr />

          <div className="teams">
            <div style={{width: "50%"}}>
              <h3>MINT</h3>
              <h4>Multifaceted Innovations in Neurotechnology</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nisi vitae elit fringilla fermentum eget quis odio.
              Aliquam eu nulla a risus scelerisque ultrices sed molestie ex. Nam pretium commodo ipsum at semper. Praesent ornare pulvinar
                porttitor. Curabitur condimentum laoreet accumsan. Morbi venenatis metus ac ligula porta, non gravida leo fermentum. Mauris 
                nec dui eu eros aliquam fermentum.
              </p>
            </div>
            <iframe src="https://drive.google.com/file/d/1MWdRYMI1WCBESAi_ptAqyyDhD00TcJC0/preview" width="640" height="480" allow="autoplay"></iframe>
          </div>

          <hr />

          <div className="teams">
            <div style={{width: "50%"}}>
            <h3>BIT</h3>
            <h4>Biochemical Innovation Team</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nisi vitae elit fringilla fermentum eget quis odio.
              Aliquam eu nulla a risus scelerisque ultrices sed molestie ex. Nam pretium commodo ipsum at semper. Praesent ornare pulvinar
                porttitor. Curabitur condimentum laoreet accumsan. Morbi venenatis metus ac ligula porta, non gravida leo fermentum. Mauris 
                nec dui eu eros aliquam fermentum.
              </p>
            </div>
            <iframe src="https://drive.google.com/file/d/15w1RSQzA43uOs5-Ywp5VaGRQ3Qt-V5Bw/preview" width="640" height="480" allow="autoplay"></iframe>
          </div>

          <hr />

          <div className="teams">
            <div style={{width: "50%"}}>
            <h3>M2M</h3>
            <h4>Multiple Sclerosis to Movement</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nisi vitae elit fringilla fermentum eget quis odio.
              Aliquam eu nulla a risus scelerisque ultrices sed molestie ex. Nam pretium commodo ipsum at semper. Praesent ornare pulvinar
                porttitor. Curabitur condimentum laoreet accumsan. Morbi venenatis metus ac ligula porta, non gravida leo fermentum. Mauris 
                nec dui eu eros aliquam fermentum.
              </p>
            </div>
            <iframe src="https://drive.google.com/file/d/17KcGX60c8MAD977-DXelRLRNIlLJ8cse/preview" width="640" height="480" allow="autoplay"></iframe>
          </div>

          <hr />

          <div className="teams">
            <div style={{width: "50%"}}>
            <h3>Mentorship</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nisi vitae elit fringilla fermentum eget quis odio.
              Aliquam eu nulla a risus scelerisque ultrices sed molestie ex. Nam pretium commodo ipsum at semper. Praesent ornare pulvinar
                porttitor. Curabitur condimentum laoreet accumsan. Morbi venenatis metus ac ligula porta, non gravida leo fermentum. Mauris 
                nec dui eu eros aliquam fermentum.
              </p>
            </div>
            <iframe src="https://drive.google.com/file/d/11HbkE8qDOcQsIfrqI1dGSdJIL7IhDz19/preview" width="640" height="480" allow="autoplay"></iframe>
          </div>

          <hr />

          <div className="teams">
            <div style={{width: "50%"}}>
            <h3>Media</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nisi vitae elit fringilla fermentum eget quis odio.
              Aliquam eu nulla a risus scelerisque ultrices sed molestie ex. Nam pretium commodo ipsum at semper. Praesent ornare pulvinar
                porttitor. Curabitur condimentum laoreet accumsan. Morbi venenatis metus ac ligula porta, non gravida leo fermentum. Mauris 
                nec dui eu eros aliquam fermentum.
              </p>
            </div>
            <iframe src="https://drive.google.com/file/d/16oTu4mwE5CbcHktJ1rSrF0FTYuCbcOzC/preview" width="640" height="480" allow="autoplay"></iframe>
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
