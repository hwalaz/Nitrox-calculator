import React, { Component } from 'react'

export default class Appendix extends Component {
  render() {
    return (
      <div className="container">
        <div className="row shadow">
          <div className="col-12">
            <h2>
              Resources
            </h2>
            <div>
              <a className="link" href="https://en.wikipedia.org/wiki/Nitrox">Nitrox on Wikipedia</a>
              <a className="link" href="https://en.wikipedia.org/wiki/Maximum_operating_depth">MOD on Wikipedia</a>
              <a className="link" href="https://en.wikipedia.org/wiki/Equivalent_air_depth">EAD on Wikipedia</a>
              <a className="link" href="https://en.wikipedia.org/wiki/Equivalent_narcotic_depth">END on Wikipedia</a>
              <a className="link" href="https://en.wikipedia.org/wiki/Oxygen_toxicity">Oxygen toxicity on Wikipedia</a>
              <a className="link" href="https://en.wikipedia.org/wiki/Partial_pressure">Partial pressure on Wikipedia</a>
            </div>
            </div>
            <div className="col-12">
            <h2>
              Lingo
            </h2>
            <div>
              <p className="lingo"><b>Normoxic Nitrox:</b> Regular air, or cleaned air with 21 percent oxygen</p>
              <p className="lingo"><b>EAN:</b> enriched air nitrox, a mix with more than 21 percent oxygen</p>
              <p className="lingo"><b>EAD:</b> Equivalent Air Depth, The relationship between nitrogen absorbed at a particular depth breathing nitrox and the depth at which an equivalent absorption rate would occur breathing air.</p>
              <p className="lingo"><b>PPO2:</b> Oxygen partial pressure, pressure in atmospheres x O2 percentage</p>
              <p className="lingo"><b>MOD:</b> Maximum operating depth, PPO2 / O2 percentage = MOD</p>
              <p className="lingo"><b>Best Mix:</b> PPO2 limit/ATA (pressure at the maximum depth of the dive)</p>

            </div>
          </div>
          <div className="col-12">
          <h2>
            Disclaimer
          </h2>
          <div>
            <i>
              This calculator provides information about gas use in scuba diving. <b>UNDER NO CIRCUMSTANCES</b> is there any implication that any gas mixture is safe or even life supporting at any depth. If you have not recived training in technical scuba diving, Nitrox, Trimix or Heliox you should not attempt to use any of these results. Improper use of gasses in diving can result in injury or <b>DEATH</b>.
            </i>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
