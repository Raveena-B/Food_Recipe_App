import React from "react";
import "./navbar.css";
import {Link} from"react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            
                <Link className="navigationHome" to="/">Home</Link>
                <Link className="navigation" to="/addrecipe">Add Recipe</Link>
              
            </div>
        
    );
}


export default Navbar;