import React from "react";
import { Link } from "react-router-dom";

// Images
import facebookwhite from "./images/facebook-white.svg";
import twitterwhite from "./images/twitter-white.svg";
import instagramwhite from "./images/instagram-white.svg";
import appstore from "./images/app-store.svg";
import playstore from "./images/play-store.svg";
import windowsstore from "./images/windows-store.svg";

import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-navigation">
          <ul className="footer-navigation__items">
            <li className="footer-navigation__item">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-navigation__item">
              <Link to="/terms">Terms and Conditions</Link>
            </li>
            <li className="footer-navigation__item">
              <Link to="/privacy">Privacy</Link>
            </li>
            <li className="footer-navigation__item">
              <Link to="/collection-statement">Collection Statement</Link>
            </li>
            <li className="footer-navigation__item">
              <Link to="/help">Help</Link>
            </li>
            <li className="footer-navigation__item">
              <Link to="/manage-account">Manage Account</Link>
            </li>
          </ul>
        </div>
        <p className="footer-copyright">
          Copyright &copy; 2016 Demo Streaming. All Right Reserved.
        </p>
        <div className="footer-icons">
          <div className="footer-icons__social">
            <Link to="/facebook">
              <img id="facebook" src={facebookwhite} alt="facebook-white" />
            </Link>

            <Link to="/twitter">
              <img id="twitter" src={twitterwhite} alt="twitter-white" />
            </Link>
            <Link to="/instagram">
              <img id="instagram" src={instagramwhite} alt="instagram-white" />
            </Link>
          </div>
          <div className="footers-icons__store">
            <Link to="/app-store">
              <img src={appstore} alt="app-store" />
            </Link>
            <Link to="/play-store">
              <img src={playstore} alt="play-store" />
            </Link>
            <Link to="/windows-store">
              <img
                src={windowsstore}
                style={{ width: "110px", height: "40px" }}
                alt="windows-store"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
    )
}
export default Footer;