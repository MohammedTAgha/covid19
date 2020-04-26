import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
const Navigation = () => {
  return (
    <div className="nav-bar" style={{ position: "sticky", top: 0 }}>
      <div className="logo">
        <img src={logo} alt="corona "/>
      </div>
      <ul>
        <Link to="/">
          <li>
            <a href="/" style={{ color: "#400496" }}>
              Home
            </a>
          </li>
        </Link>
        <Link to="/meaters">
          <li>
            <a href="/meaters">Meaters</a>
          </li>
        </Link>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
      <div>
        <svg
          className="hamburger"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="28"
          viewBox="0 0 35 28"
        >
          <g id="Hamburger" transform="translate(-3.504 -7.838)">
            <line
              id="Line_4"
              data-name="Line 4"
              x2="31"
              transform="translate(5.504 9.838)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="4"
            />
            <line
              id="Line_5"
              data-name="Line 5"
              x2="31"
              transform="translate(5.504 22.838)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="4"
            />
            <line
              id="Line_6"
              data-name="Line 6"
              x2="31"
              transform="translate(5.504 33.838)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="4"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Navigation;
