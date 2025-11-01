import React, { useState } from "react";
import {NavLink, useNavigate } from "react-router";
import "./Navbar.css";
import { MdLocalGroceryStore } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate()

  const handleHomePage = () => { 
    navigate('/')
  }

  return (
    <nav className="nav">
      <div className="logo" onClick={handleHomePage}>
        Rehan's<span> Coffee</span>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" className="link" onClick={closeMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="link" onClick={closeMenu}>About</NavLink>
        </li>
        <li>
          <NavLink to="/product" className="link" onClick={closeMenu}>Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="link" onClick={closeMenu}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/addtocart" className="link" id="addtocartText" onClick={closeMenu}>Cart <MdLocalGroceryStore className="addtocartIcon"/></NavLink>
        </li>
      </div>

      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
