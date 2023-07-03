import React from "react";

const Navbar = ({ getUsers }) => {
  return (
    <nav className="navbar">
      <div className="brand">UserGrid</div>
      <button className="nav-button" onClick={getUsers}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;
