import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Mod from "./components/Mod";
import Bm from "./components/Bm";
import Ead from "./components/Ead";
import Planner from "./components/Planner";
import Appendix from "./components/Appendix";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1>Nitrox Calculator</h1>
            <Router>
              <div>
                <Nav />
                <Route path="/" exact component={Home} />
                <Route path="/Mod" component={Mod} />
                <Route path="/Bm" component={Bm} />
                <Route path="/Ead" component={Ead} />
                <Route path="/Planner" component={Planner} />
                <Route path="/Appendix" component={Appendix} />
              </div>
            </Router>
            <div className="credit">
              Built with &hearts; using <b>React.js</b>
            </div>
            <div className="credit">
              Made in Berlin by{" "}
              <a
                target="_blank"
                href="https://leandro.berlin"
                rel="noopener noreferrer"
              >
                Leandro
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
