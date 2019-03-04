import React, { Component } from "react";
import decal from "../img/decal.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row shadow">
          <div className="col-12">
            <img src={decal} />
          </div>
          <div className="col-12">
            <h2>Disclaimer</h2>
            <div>
              <i>
                This calculator provides information about gas use in scuba
                diving. <b>UNDER NO CIRCUMSTANCES</b> is there any implication
                that any gas mixture is safe or even life supporting at any
                depth. If you have not recived training in technical scuba
                diving, Nitrox, Trimix or Heliox you should not attempt to use
                any of these results. Improper use of gasses in diving can
                result in injury or <b>DEATH</b>.
              </i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
