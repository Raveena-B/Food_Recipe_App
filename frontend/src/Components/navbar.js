import React from "react";
import "./navbar.css";
import "../Pages/addrecipe.css";
import {Link} from"react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            
                <Link className="navigationHome" to="/">Home</Link>
                <Link className="navigation" to="/addrecipe">Add Recipe</Link>
                {/* <button className="add1">Refresh Page</button> */}
            </div>
        
    );
}


export default Navbar;