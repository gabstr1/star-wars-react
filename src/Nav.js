import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div id="side-menu" className="side-nav">
        <Link to="/about">About</Link>
        <Link to="/films">Films</Link>
      </div>
    </div>
  );
};

export default Nav;
