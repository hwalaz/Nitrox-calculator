import React, { Component } from "react";
import nitrox from '../helpers/nitrox'

export default class Ead extends Component {

  state = {
    FO2: 0.32,
    ppO2: 1.4,
    Maxdepth: 33.75,
    Ata: 4.3,
    Ean: 32,
    FN2: 0.68,
    Ead: 27.7
  }

  change = e => {
    const Ean = e.target.value;
    const FN2 = nitrox.fn2(Ean)
    this.setState({
      Ean: Ean,
      FO2: nitrox.fo2(Ean),
      FN2: FN2,
      Maxdepth: this.state.Maxdepth,
      Ata: nitrox.ata(this.state.Maxdepth),
      //EAD = (Depth + 10) × Fraction of N2 / 0.79 − 10
      Ead: ((this.state.Maxdepth + 10) * FN2 / 0.79 - 10).toFixed(2)
    });
  }

  update = e => {
    if (e.target.name === "Maxdepth") {
      const Maxdepth = parseInt(e.target.value, 10);
      const Ata = nitrox.ata(Maxdepth)
      const FO2 = this.state.FO2;
      const Ean = nitrox.ean(FO2)
      const FN2 = nitrox.fn2(Ean)
      this.setState({
        Maxdepth: Maxdepth,
        Ata: Ata,
        FO2: FO2,
        FN2: FN2,
        Ean: Ean,
        Ead: nitrox.ead(Maxdepth , FN2 )
      });

    } else {


      const FO2 = e.target.value;
      const Mod = nitrox.mod(this.state.ppO2 , FO2 )
      const Ata =  nitrox.ata(this.state.Maxdepth)
      const Ean = nitrox.ean(FO2)
      const FN2 = nitrox.fn2(Ean)
      this.setState({
        FO2: FO2,
        Mod: Mod,
        Ata: Ata,
        FN2: FN2,
        Ean: Ean,
        Ead: nitrox.ead(this.state.Maxdepth, FN2 )
      });

    }
  };

  render() {
    return (
      <div className="container">
        <div className="row shadow">
          <div className="col-12">
            <h2>
            Equivalent Air Depth (EAD)
            </h2>
            <p>
            <i>The equivalent air depth for a given nitrox mix and depth is the depth of a dive when breathing air that would have the same partial pressure of nitrogen.</i>
            </p>
          </div>
          <div className="col-12">

          If you use <span className="relevant">EAN</span>
          <select value={this.state.Ean} onChange={this.change}>
            {[...Array(20)].map((x, i) => <option key={i} value={21+i}>{21+i}</option>)
           }

          </select>
           your <b>Fraction of Oxygen</b> (FO<sub>2</sub>) is
            <input
              type="number"
              name="FO2"
              placeholder={this.state.FO2}
              onChange={e => this.update(e)}
            /> - your <b>Fraction of Nitrogen</b> (FN<sub>2</sub>) is <span className="relevant">{this.state.FN2}</span>

          and your planned <b>Maximum Depth</b> is

           <input
              type="number"
              name="Maxdepth"
              placeholder={this.state.Maxdepth}
              onChange={e => this.update(e)}
            /> meter  or <span className="relevant">{this.state.Ata} ATA</span>.
            <p>Then your  Equivalent Air Depth (EAD) (rounding deeper) is
            <span className="result">{this.state.Ead} m</span></p>
          </div>
        </div>
      </div>
    );
  }
}
