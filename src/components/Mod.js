import React, { Component } from "react";
import Nitrox from "nitrox-calc";

export default class Mod extends Component {
  state = {
    FO2: 0.32,
    ppO2: 1.4,
    Mod: 33.75,
    Ata: 4.37,
    Ean: 32
  };

  change = e => {
    const Ean = e.target.value;
    const Mod = Nitrox.mod(this.state.ppO2, Ean);

    this.setState({
      Ean: Ean,
      FO2: Nitrox.fo2(Ean),
      Mod: Nitrox.mod(this.state.ppO2, Ean),
      Ata: Nitrox.ata(Mod)
    });
  };

  update = e => {
    if (e.target.name === "FO2") {
      const FO2 = e.target.value;
      const Ean = Nitrox.ean(FO2);
      const Mod = Nitrox.mod(this.state.ppO2, Ean);
      this.setState({
        FO2: FO2,
        Mod: Mod,
        Ean: Ean,
        Ata: Nitrox.ata(Mod)
      });
    } else {
      const ppO2 = e.target.value;
      const Ean = Nitrox.ean(this.state.FO2);
      const Mod = Nitrox.mod(ppO2, Ean);
      this.setState({
        ppO2: ppO2,
        Mod: Mod,
        Ean: Ean,
        Ata: Nitrox.ata(Mod)
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row shadow">
          <div className="col-12">
            <h2>Maximum Operating Depth (MOD)</h2>
            <p>
              <i>
                Maximum Operating Depth (MOD) is the maximum safe depth at which
                a given nitrox mixture can be used. MOD depends on the allowed
                partial pressure of oxygen (ppO<sub>2</sub>), which is related
                to exposure time and the acceptable risk assumed for central
                nervous system oxygen toxicity.
              </i>
            </p>
          </div>
          <div className="col-12">
            If you use EAN
            <select value={this.state.Ean} onChange={this.change}>
              {[...Array(20)].map((x, i) => (
                <option key={i} value={21 + i}>
                  {21 + i}
                </option>
              ))}
            </select>
            your <b>Fraction of Oxygen</b> (FO<sub>2</sub>) is
            <input
              type="number"
              name="FO2"
              placeholder={this.state.FO2}
              onChange={e => this.update(e)}
            />
            and your <b>Partial Pressure Oxygen</b> (ppO<sub>2</sub>) is
            <select value={this.state.ppO2} onChange={this.update}>
              <option key="1.2" value="1.2">
                1.2
              </option>
              <option key="1.4" value="1.4">
                1.4
              </option>
              <option key="1.5" value="1.5">
                1.5
              </option>
              <option key="1.6" value="1.6">
                1.6
              </option>
            </select>{" "}
            bar
            <p>
              The <b>Maximum Operating Depth (MOD)</b> is
              <span className="result">{this.state.Mod} m</span> equal to{" "}
              <span className="relevant">{this.state.Ata} ATA</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
