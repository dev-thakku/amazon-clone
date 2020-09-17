import React from "react";
import "./Footer.css";
import logo from "./images/logo.png";

function Footer({ hideLinks }) {
  return (
    <div className="footer">
      <a href="#top">
        <div className="footer__back">
          <p>Back to Top</p>
        </div>
      </a>
      {!hideLinks && (
        <div className="footer__nav">
          <div className="footer__column">
            <li className="title">Get to Know Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Sustainability</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Tours</li>
          </div>
          <div className="footer__column">
            <li className="title">Make Money with Us</li>
            <li>Sell on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell Your Apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
            <li>› See More Make Money with Us</li>
          </div>
          <div className="footer__column">
            <li className="title">Amazon Payment Products</li>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </div>
          <div className="footer__column">
            <li className="title">Let Us Help You</li>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>
              Shipping Rates & <br />
              Policies
            </li>
            <li>
              Returns & <br />
              Replacements
            </li>
            <li>
              Manage Your Content <br />
              and Devices
            </li>
            <li>Amazon Assistant</li>
            <li>Help</li>
          </div>
        </div>
      )}
      <div className="footer__bottom">
        <img src={logo} alt="" />
        <p>
          Not Copyrighted. This is a <span>Clone.</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
