import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AllPosts from "./components/allPosts";
import Username from "./components/Username";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/username">
              <Username />
            </Route>
            <Route path="/">
              <AllPosts />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
