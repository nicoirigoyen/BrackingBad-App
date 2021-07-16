import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div className="navbar">
      
        <div><Link exact to="/">Home</Link></div>
        <div><Link to="/characters">Characters</Link></div>
        <div><Link to="/episodes">Episodes</Link> </div>
 
    </div>
  );
}

export default NavBar;
