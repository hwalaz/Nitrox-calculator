import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  state = { showMenu: null };

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <nav className="navbar">
        <i className="fas fa-bars fa-3x" onClick={this.toggleMenu} />
        <ul className={this.state.showMenu ? "mobile-show" : "mobile-hidden"}>
          <li>
            <NavLink
              exact
              onClick={this.toggleMenu}
              activeClassName="active"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={this.toggleMenu}
              activeClassName="active"
              to="/Mod"
              component="Mod"
            >
              MOD
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={this.toggleMenu}
              activeClassName="active"
              to="/Bm"
              component="Bm"
            >
              Best Mix
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={this.toggleMenu}
              activeClassName="active"
              to="/Ead"
              component="Ead"
            >
              Equivalent Air Depth
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={this.toggleMenu}
              activeClassName="active"
              to="/Planner"
              component="Planner"
            >
              Dive Planner
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={this.toggleMenu}
              activeClassName="active"
              to="/Appendix"
              component="Appendix"
            >
              Appendix
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
