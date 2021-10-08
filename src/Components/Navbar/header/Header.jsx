import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../../assets/menu.svg";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import "./header.css";
import {NavLink} from 'react-router-dom';

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="\">
            <Logo className="logo" />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
        <li className="option" onClick={closeMobileMenu}>
          <NavLink  to='/'> Home</NavLink>
        </li>
          <li className="option" onClick={closeMobileMenu}>
            
            <NavLink  to='/about'>About </NavLink>
          </li>
      
          <li className="option" onClick={closeMobileMenu}>
          <NavLink  to='/achievements'>Achievements </NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <NavLink  to='/FAQ'>FAQ </NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <NavLink  to='/Events'>Events </NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <NavLink  to='/facilities'>Facilities </NavLink>
          </li>

          {/* <li className="option mobile-option onClick={closeMobileMenu}>
          <NavLink  to='/FAQ'>FAQ </NavLink>
          </li> */}
          {/* <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="" className="sign-up">
              SIGN-UP/SIGN-IN
            </a>
          </li> */}
        </ul>
      </div>
      {/* <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
        <NavLink  to='/FAQ'>FAQ </NavLink>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="" className="signup-btn">
            SIGN-UP/SIGN-IN
          </a>
        </li>
      </ul> */}
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
