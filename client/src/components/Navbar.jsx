import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <strong className="brand-name">
        SECURE<strong className="highlight-design">SAGE</strong>
      </strong>
      <div className="group-section">
        <em className="greet-user">  Hi, Admin   </em>
        <Link to="/login">
          <button className="button-secondary" tabIndex={-1}>Logout
          </button>
        </Link>
      </div>
    </nav>
  )
}