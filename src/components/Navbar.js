import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './navbarstylesheet.css'
class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
        <ul className="nav ">
            <li >
              <Link className="pages home" to='/'>Home</Link>
            </li>
            <li >
              <Link className="pages" to='/username'>Username</Link>
            </li>
          </ul>

        )
    }
}

export default Navbar