import React, { Component } from "react";
import Nitrox from "nitrox-calc";

export default class Planner extends Component {
  state = {
    FO2: 0.32,
    ppO2: 1.4,
    Maxdepth: 33.75,
    Mod: 33.75,
    Ata: 4.3,
    Ean: 32,
    FN2: 0.68,
    Ead: 27.7,
    BestMix: 32,
    appO2: 1.38
  };

  changeEan = e => {
    const Ean = e.target.value;
    const FN2 = Nitrox.fn2(Ean);
    const FO2 = Nitrox.fo2(Ean);
    const Mod = Nitrox.mod(this.state.ppO2, Ean);
    const Ata = Nitrox.ata(this.state.Maxdepth);
    const Ead = Nitrox.ead(this.state.Maxdepth, FN2);

    this.setState({
      Ean: Ean,
      FO2: FO2,
      FN2: FN2,
      Maxdepth: this.state.Maxdepth,
      Mod: Mod,
      Ata: Ata,
      Ead: Ead
    });
  };

  changePPO2 = e => {
    const ppO2 = e.target.value;
    const Mod = Nitrox.mod(ppO2, this.state.Ean);
    const BestMix = Nitrox.bestMix(ppO2, this.state.Ata);
    this.setState({
      ppO2: ppO2,
      Mod: Mod,
      BestMix: BestMix,
      Ead: Nitrox.ead(this.state.Maxdepth, this.state.FN2),
      appO2: Nitrox.appO2(this.state.Ata, ppO2)
    });
  };

  update = e => {
    if (e.target.name === "Maxdepth") {
      const Maxdepth = parseInt(e.target.value, 10);
      const Mod = Nitrox.mod(this.state.ppO2, this.state.Ean);
      const Ata = Nitrox.ata(Maxdepth);
      const FO2 = this.state.FO2;
      const Ean = Nitrox.ean(FO2);
      const FN2 = Nitrox.fn2(Ean);
      const BestMix = Nitrox.bestMix(this.state.ppO2, Ata);
      this.setState({
        Maxdepth: Maxdepth,
        Ata: Ata,
        FO2: FO2,
        FN2: FN2,
        Ean: Ean,
        Mod: Mod,
        Ead: Nitrox.ead(Maxdepth, FN2),
        BestMix: BestMix,
        appO2: Nitrox.appO2(Ata, FO2)
      });
    } else {
      const FO2 = e.target.value;
      const Ean = Nitrox.ean(FO2);
      const Mod = Nitrox.mod(this.state.ppO2, Ean);
      const Ata = Nitrox.ata(this.state.Maxdepth);
      const FN2 = Nitrox.fn2(Ean);
      const BestMix = Nitrox.bestMix(this.state.ppO2, Ata);
      this.setState({
        FO2: FO2,
        Mod: Mod,
        Ata: Ata,
        FN2: FN2,
        Ean: Ean,
        Ead: Nitrox.ead(this.state.Maxdepth, FN2),
        BestMix: BestMix,
        appO2: Nitrox.appO2(Ata, FO2)
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row shadow">
          <div className="col-12">
            <h2>Nitrox dive planner</h2>
            <p>
              <i>
                This utility allows the safe planning a single Enriched Air
                Nitrox Diving.{" "}
              </i>
            </p>
          </div>
          <div className="col-12">
            You plan to use <span className="relevant">EAN</span>
            <select value={this.state.Ean} onChange={this.changeEan}>
              {[...Array(20)].map((x, i) => (
                <option key={i} value={21 + i}>
                  {21 + i}
                </option>
              ))}
            </select>
            your <b>Fraction of Oxygen</b> (FO<sub>2</sub>) will be
            <input
              type="number"
              name="FO2"
              placeholder={this.state.FO2}
              onChange={e => this.update(e)}
            />{" "}
            and your <b>Fraction of Nitrogen</b> (FN<sub>2</sub>) will{" "}
            <span className="relevant">{this.state.FN2}</span>
            With a <b>Partial Pressure of Oxygen</b> (ppO<sub>2</sub>) of
            <select value={this.state.ppO2} onChange={this.changePPO2}>
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
            bar and <b>Maximum Depth</b> of
            <input
              type="number"
              name="Maxdepth"
              placeholder={this.state.Maxdepth}
              onChange={e => this.update(e)}
            />{" "}
            meter or <span className="relevant">{this.state.Ata} ATA</span>.
            <p>
              <span
                className={
                  this.state.Mod >= this.state.Maxdepth ? "relevant" : "error"
                }
              >
                {this.state.Mod >= this.state.Maxdepth
                  ? "Profile correct"
                  : "Caution your profile is dangerous"}
              </span>
            </p>
            <p>
              You want to dive{" "}
              <span className="relevant">{this.state.Maxdepth} m</span> and your
              MOD is <span className="relevant">{this.state.Mod} m</span>, your
              Equivalent Air Depth (EAD) (rounding deeper) is{" "}
              <span className="relevant">{this.state.Ead} m</span>
              with actual <b>Partial Pressure Oxygen</b> is{" "}
              <span className="relevant">{this.state.appO2}</span>.
            </p>
            <p>
              Your Best Mix for this dive is{" "}
              <span className="relevant">EAN {this.state.BestMix} %</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
