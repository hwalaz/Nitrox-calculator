import React, { Component } from "react";
import "./App.css";



import Mod from './components/Mod'
import Bm from './components/Bm'
import Ead from './components/Ead'
import Planner from './components/Planner'
import Appendix from './components/Appendix'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
          <h1>Nitrox Calculator</h1>
            <Mod />
            <Bm />
            <Ead />
            <Planner />
            <Appendix />
            <div className="credit">Built with &hearts; using <b>React.js</b></div>
            <div className="credit">Made in Berlin by <a target="_blank" href="https://leandro.berlin" rel="noopener noreferrer">Leandro</a></div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
