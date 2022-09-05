import React from "react";
import { useNavigate } from "react-router-dom";

import { logOutRequest } from "../api/authRequest";

export default function Navbar() {
  const navigate = useNavigate();

  function handleClick() {
    logOutRequest().then(res => {
      if (res) {
        navigate("/");
        localStorage.removeItem("token");
      }
    })
      .catch(err => console.log(err));
  }
  return (
    <nav className="nav-bar">
      <strong className="brand-name">
        SECURE<strong className="highlight-design">SAGE</strong>
      </strong>
      <div className="group-section">
        <em className="greet-user">  Hi, Admin   </em>
        <button className="button-secondary" onClick={handleClick} tabIndex={-1}>Logout
        </button>
      </div>
    </nav>
  )
}