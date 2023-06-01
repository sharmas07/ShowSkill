import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import hamburger_btn from "../assets/hamburger-btn.png";
import close from "../assets/close.png";
// import userpic from "../assets/user-pic.png";
import {Link} from 'react-router-dom'

const Navbar = ({ authToken, setAuthToken }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      setAuthToken(true);
    }
  }, [])
  const userpic = 'https://images.unsplash.com/photo-1611880147493-7542bdb0f024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80'
  return (
    <div className="nav__container">
      <nav className="navbar">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="navbar-links">
          <a href="/" className="navbar-link">
            <h3>Home</h3>
          </a>
          <a href="/about" className="navbar-link">
            <h3>About</h3>
          </a>
          {authToken ? (
            <Link className="navbar-link" to="/userprofile">
              <div className="user__container">
                <h3>username</h3>
                <img className="user__pic" src={userpic} alt="" />
              </div>
            </Link>
          ) : (
            <a href="/signup" className="navbar-link">
              <h3>Signup</h3>
            </a>
          )}
        </div>
        <div className="hamburger__menu" onClick={toggleMenu}>
          <img
            style={{
              width: "25px",
            }}
            src={hamburger_btn}
            alt=""
          />
        </div>
        <div className={`menu-items ${showMenu ? "show" : ""}`} id="menuItems">
          <div className="ham__btn" onClick={toggleMenu}>
            <img
              style={{
                width: "25px",
              }}
              src={close}
              alt=""
            />
          </div>
          {authToken ? (
            <Link  onClick={toggleMenu} style={{border:'1px solid white'}} className="navbar-link" to="/userprofile">
              <div className="user__container">
                <h4 style={{color:'white'}}>username</h4>
                <img className="user__pic" src={userpic} alt="" />
              </div>
            </Link>
          ) : (
            <a href="/signup" className="navbar-link">
              <h3>Signup</h3>
            </a>
          )}
          <Link to="/" onClick={toggleMenu} className="menu-link">
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu} className="menu-link">
            About
          </Link>
         
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
