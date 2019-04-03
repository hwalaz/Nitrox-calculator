import React, { Component } from "react";
import Nitrox from "nitrox-calc";

// Bestmix not EAN

export default class Bm extends Component {
  state = {
    FO2: 0.32,
    ppO2: 1.4,
    Mod: 33.75,
    Ata: 4.3,
    Ean: 32
  };

  update = e => {
    if (e.target.name === "Mod") {
      const Mod = e.target.value;
      const Ata = Nitrox.ata(Mod);
      const Ean = Nitrox.bestMix(this.state.ppO2, Ata);
      const FO2 = Nitrox.fo2(Ean);

      this.setState({
        Mod: Mod,
        Ata: Ata,
        FO2: FO2,
        Ean: Nitrox.bestMix(this.state.ppO2, Ata)
      });
    } else {
      const ppO2 = e.target.value;
      const Ata = Nitrox.ata(this.state.Mod);
      const Ean = Nitrox.bestMix(ppO2, this.state.Ata);
      const FO2 = Nitrox.fo2(Ean);
      this.setState({
        ppO2: ppO2,
        Ata: Ata,
        FO2: FO2,
        Ean: Ean
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row shadow">
          <div className="col-12">
            <h2>Best Mix</h2>
            <p>
              <i>
                The composition of a Nitrox mix can be optimized for a given
                planned dive profile. This is termed "Best mix", for the dive,
                and provides the maximum no-decompression time compatible with
                acceptable oxygen exposure.
              </i>
            </p>
          </div>
          <div className="col-12">
            If your Maximum Partial Pressure Oxygen (ppO<sub>2</sub>) is
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
            bar and your planned <b>Maximum Depth</b> is
            {/* OKKIO: NON MOD MA MAXDEPTH */}
            <input
              type="number"
              name="Mod"
              placeholder={this.state.Mod}
              onChange={e => this.update(e)}
            />{" "}
            meter or <span className="relevant">{this.state.Ata} ATA</span>.
            <p>
              Then your Nitrox <b>Best Mix</b> (rounding down) is EAN
              <span className="result">{this.state.Ean}%</span> equal to{" "}
              <span className="relevant">
                {this.state.FO2} FO<sub>2</sub>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
