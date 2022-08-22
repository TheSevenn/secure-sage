import React from "react";
import {Link} from "react-router-dom";
import LogoutIcon from "@material-ui/icons/Logout";

export default function Navbar(){
    return (
        <nav className="nav-bar">
           <strong className="brand-name">SECURESAGE</strong>
           <div className="group-section">
           <em className="greet-user">  Hi, Admin   </em>
           <Link to="/login">
             
             <button className="button-secondary">Logout
             <LogoutIcon/>
             </button>
           </Link>
           </div>
        </nav>
    )
}