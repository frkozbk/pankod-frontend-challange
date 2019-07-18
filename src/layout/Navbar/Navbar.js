import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
        <nav>
      <div className="navbar-container">
        <Link to="/">
          <h1 className="navbar-title">Demo Streaming</h1>
        </Link>

        <ul className="navbar-nav__items">
          <li className="navbar-nav__item">
            <Link to="/login">Login</Link>
          </li>
          <li className="navbar-nav__item" id="start-trial">
            <Link to="/free-trial">Start Your Free Trial</Link>
          </li>
        </ul>
        
      </div>
    </nav>
    )
}
export default Navbar;