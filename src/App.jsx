import React from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Teams from "./pages/Teams";
import Recruitment from "./pages/Recruitment";
import Sponsors from "./pages/Sponsors";
import bestLogo from "./images/logo/favicon.png";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <div>
            <img src={bestLogo} className="logo" style={{width: "100px", height: "100px"}}/>
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
                <Link to="/recruitment">
                  RECRUITMENT
                </Link>
              </li>
              <li>
                <Link to="/sponsors">SPONSORS</Link>
              </li>
            </ul>
          </nav>

          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/recruitment" element={<Recruitment />}/>
            <Route path="/sponsors" element={<Sponsors />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
