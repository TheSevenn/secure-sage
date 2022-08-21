import React from "react";
import {Link} from "react-router-dom";


export default function Navbar(){
    return (
        <nav>
           <strong>HaveIT</strong>
           <em>  Hi, Admin   </em>
           <Link to="/login">
             <button>Logout</button>
           </Link>
        </nav>
    )
}