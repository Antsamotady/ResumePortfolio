import React from 'react';
import { Link } from 'react-router-dom';

import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

import '../Stylesheets/navbar.css';
import '../Stylesheets/theme-radio.css';


function Navbar({ onLinkClick, onCloseMenu, toggleMenu, onThemeSelected, theme }) {

  return (
    <>
      <div className="app-navbar">
        <div className="app-container">
          <div className="primary-header">
            <Link to="/"><span className="logo">LOGO</span></Link>

            <div className="theme-selector-btn">
              <div className="theme-btn">
                <input type="radio" name="color" id="theme-default" value="theme-default"
                      checked={theme === "theme-default"}
                      onChange={onThemeSelected} />
                <label htmlFor="theme-default"><span className="theme-default"></span></label>
              </div>

              <div className="theme-btn">
                <input type="radio" name="color" id="theme-green" value="theme-green"
                      checked={theme === "theme-green"}
                      onChange={onThemeSelected} />
                <label htmlFor="theme-green"><span className="theme-green"></span></label>
              </div>

              <div className="theme-btn">
                <input type="radio" name="color" id="theme-pastel" value="theme-pastel"
                      checked={theme === "theme-pastel"}
                      onChange={onThemeSelected} />
                <label htmlFor="theme-pastel"><span className="theme-pastel"></span></label>
              </div>

              <div className="theme-btn">
                <input type="radio" name="color" id="theme-orange" value="theme-orange"
                      checked={theme === "theme-orange"}
                      onChange={onThemeSelected} />
                <label htmlFor="theme-orange"><span className="theme-orange"></span></label>
              </div>
            </div>


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