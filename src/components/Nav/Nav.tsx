import React, { FC  } from "react";

import "./Nav.css";
import { Link } from "react-router-dom";
import { PATH_ABOUT, PATH_FILMS } from "../../utils/constants";

const Nav:FC = () => {
  return (
    <div>
      <div className="side-nav ">
        <Link to={PATH_ABOUT} className="nav-link">About</Link>
        <Link to={PATH_FILMS} className="nav-link">Films</Link>
      </div>
      <div className=" top-nav">
        <Link to={PATH_ABOUT} className="nav-link">About</Link>
        <Link to={PATH_FILMS} className="nav-link">Films</Link>
      </div>
    </div>
  );
};

export default Nav;
