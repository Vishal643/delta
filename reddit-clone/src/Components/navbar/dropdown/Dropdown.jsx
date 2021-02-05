import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = () => {
  return (
    <div>
      <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <p>
            <Link to="/">Home </Link>
          </p>
          <p>
            <Link to="/Post">Post</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
