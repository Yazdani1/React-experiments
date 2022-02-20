import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-dashboard-headear">
        <ul>
          <Link to={"/"}>
            <li>Select Feature</li>
          </Link>
        </ul>
        <ul>
          <Link to={"/usereducer-hooks"}>
            <li>Use Reducer</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
