import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./navbarstylesheet.css";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log();
    return (
      <ul className="nav ">
        <li>
          <NavLink className="pages" to="/" exact activeClassName="white">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="pages" to="/username" activeClassName="white">
            Username
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Navbar;
