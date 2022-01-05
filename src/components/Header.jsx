import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles.css";

const Header = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        Home Page
      </Link>
      <Link className="link" to="/Favourites">
        Favourites
      </Link>
    </div>
  );
};
export default Header;
