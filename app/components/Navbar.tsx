import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient uppercase">resumind</p>
      </Link>
      <Link to="/upload" className="uppercase primary-button w-fit">
        upload resume
      </Link>
    </nav>
  );
};

export default Navbar;
