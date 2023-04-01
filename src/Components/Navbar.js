import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

import '../Stylesheets/navbar.css';


function Navbar({ onLinkClick, onCloseMenu, toggleMenu }) {

  return (
    <>
      <div className="app-navbar">
        <div className="app-container">
          <div className="primary-header">
            <Link to="/"><span className="logo">LOGO</span></Link>
            <div className="menu-links">
              <Link to="/about" onClick={onLinkClick}><span>About me</span></Link>
              <Link to="/capabilities" onClick={onLinkClick}><span>Capabilities</span></Link>
              <Link to="/contact" onClick={onLinkClick}><span>Contact me</span></Link>
            </div>
            <div className="menu-mobile">
              <div className="menu-mobile-icon">
                {toggleMenu
                  ? <RiCloseLine className="ri-closeline" size={27} onClick={onCloseMenu}/>
                  : <RiMenu3Line className="ri-menu3line" size={27} onClick={onCloseMenu}/>
                }
              </div>
              {toggleMenu && (
                <div className="menu-mobile-links scale-up-center">
                  <Link to="/" onClick={onLinkClick}><span className="text-link">Home</span></Link>
                  <Link to="/about" onClick={onLinkClick}><span className="text-link">About me</span></Link>
                  <Link to="/capabilities" onClick={onLinkClick}><span className="text-link">Capabilities</span></Link>
                  <Link to="/contact" onClick={onLinkClick}><span className="text-link">Contact me</span></Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar