import React from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Teams from "./pages/Teams";
import Enable from "./pages/teams/Enable";
import M2M from "./pages/teams/M2M";
import MINT from "./pages/teams/MINT";
import SportsMed from "./pages/teams/SportsMed";
import Lifeline from "./pages/teams/Lifeline";
import Mentorship from "./pages/teams/Mentorship";
import Media from "./pages/teams/Media";
import BIT
 from "./pages/teams/BIT";
import People from "./pages/People";
import Recruitment from "./pages/Recruitment";
import Sponsors from "./pages/Sponsors";
import bestLogo from "./images/logo/favicon.png";
import { RxHamburgerMenu } from "react-icons/rx";

import AudioBiofeedbackDevice from "./pages/highlights/AudioBiofeedbackDevice";
import SimonCox from "./pages/highlights/SimonCox";
import CoassistDevice from "./pages/highlights/CoassistDevice";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <div>
              <img src={bestLogo} className="logo" alt="" />
              <h1 className="website-header">UBC BEST</h1>
            </div>
            <ul>
              <li>
                <Link to="">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/teams">TEAMS</Link>
              </li>
              <li>
                <Link to="/people">PEOPLE</Link>
              </li>
              <li>
                <Link to="/recruitment">RECRUITMENT</Link>
              </li>
              <li>
                <Link to="/sponsors">SPONSORS</Link>
              </li>
            </ul>
            <div className="navicon">
              <RxHamburgerMenu size="25px" />
            </div>
          </nav>

          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/highlights/audiobiofeedback" element={<AudioBiofeedbackDevice />} />
            <Route path="/highlights/simoncox" element={<SimonCox />} />
            <Route path="/highlights/co-assistdevice" element={<CoassistDevice />} />
            <Route path="/about" element={<About />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/enable" element={<Enable />} />
            <Route path="/teams/sportsmed" element={<SportsMed />} />
            <Route path="/teams/lifeline" element={<Lifeline />} />
            <Route path="/teams/mint" element={<MINT />} />
            <Route path="/teams/bit" element={<BIT />} />
            <Route path="/teams/m2m" element={<M2M />} />
            <Route path="/teams/mentorship" element={<Mentorship />} />
            <Route path="/teams/media" element={<Media />} />
            <Route path="/people" element={<People />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/sponsors" element={<Sponsors />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
