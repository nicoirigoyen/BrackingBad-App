import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div className="navbar">
      
        <div className="link"><Link exact to="/">Home</Link></div>
        <div className="link"><Link to="/characters">Characters</Link></div>
        <div className="link"><Link to="/episodes">Episodes</Link> </div>
 
    </div>
  );
}

export default NavBar;
