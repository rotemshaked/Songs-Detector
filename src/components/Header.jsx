import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles.css";

const Header = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        Home Page
      </Link>
      <Link className="link" to="/Lyrics">
        Lyrics
      </Link>
      <Link className="link" to="/Page3">
        Favourites
      </Link>
    </div>
  );
};
export default Header;
