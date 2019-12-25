import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./navbarstylesheet.css";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHomePage: true
    };
  }

  render() {
    console.log();
    return (
      <ul className="nav ">
        <li>
          <Link
            className={"pages " + (this.state.isHomePage ? "white" : "")}
            onClick={() => this.setState({ isHomePage: true })}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={"pages " + (!this.state.isHomePage ? "white" : "")}
            onClick={() => this.setState({ isHomePage: false })}
            to="/username"
          >
            Username
          </Link>
        </li>
      </ul>
    );
  }
}

export default Navbar;
