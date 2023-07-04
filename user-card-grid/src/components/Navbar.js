import React from "react";

const Navbar = ({ getUsers }) => {
  return (
    // Navbar component
    <nav className="navbar">
      <div className="logo">
        <img src="/Logo1.jpg" alt="Logo" className="logo-image" />
      </div>
      <div className="brand">UserHub</div>
      <button className="nav-button" onClick={getUsers}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;
