import React, { useRef, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import {IoIosArrowDropupCircle} from 'react-icons/io';

import '../Stylesheets/navbar.css';
import '../Stylesheets/theme-radio.css';

import tsifoh from '../Images/Tsifoh_224.jpg';


function Navbar({ onLinkClick, onCloseMenu, toggleMenu, onThemeSelected, theme }) {

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="app-navbar">
        <div className="app-container">
          <div className="primary-header" id="the-top">
            <Link to="/">
              <span className="logo"><img className="tsifoh-logo" src={tsifoh} alt="" /></span>
            </Link>

            <div className="theme-selector-btn">

              <div className="theme-btn">
                <input type="radio" name="color" id="theme-purple" value="theme-purple"
                      checked={theme === "theme-purple"}
                      onChange={onThemeSelected} />
                <label htmlFor="theme-purple"><span className="theme-purple"></span></label>
              </div>

              <div className="theme-btn">
                <input type="radio" name="color" id="theme-pink" value="theme-pink"
                      checked={theme === "theme-pink"}
                      onChange={onThemeSelected} />
                <label htmlFor="theme-pink"><span className="theme-pink"></span></label>
              </div>

              <div className="theme-btn">
                <input type="radio" name="color" id="theme-orange" value="theme-orange"
                      checked={theme === "theme-orange"}
                      onChange={onThemeSelected} />
                <label htmlFor="theme-orange"><span className="theme-orange"></span></label>
              </div>

              <div className="theme-btn">
                <input type="radio" name="color" id="theme-red" value="theme-red"
                      checked={theme === "theme-red"}
                      onChange={onThemeSelected} />
                <label htmlFor="theme-red"><span className="theme-red"></span></label>
              </div>

              <div className="theme-btn">
                <input type="radio" name="color" id="theme-pastel" value="theme-pastel"
                      checked={theme === "theme-pastel"}
                      onChange={onThemeSelected} />
                <label htmlFor="theme-pastel"><span className="theme-pastel"></span></label>
              </div>

              <div className="theme-btn">
                <input type="radio" name="color" id="theme-green" value="theme-green"
                      checked={theme === "theme-green"}
                      onChange={onThemeSelected} />
                <label htmlFor="theme-green"><span className="theme-green"></span></label>
              </div>

              <div className="theme-btn">
                <input type="radio" name="color" id="theme-turquoise" value="theme-turquoise"
                      checked={theme === "theme-turquoise"}
                      onChange={onThemeSelected} />
                <label htmlFor="theme-turquoise"><span className="theme-turquoise"></span></label>
              </div>

              <div className="theme-btn">
                <input type="radio" name="color" id="theme-gray" value="theme-gray"
                      checked={theme === "theme-gray"}
                      onChange={onThemeSelected} />
                <label htmlFor="theme-gray"><span className="theme-gray"></span></label>
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
              
            <div ref={sectionRef} className={isVisible ? 'visible' : 'hidden'}>
              <div className="back-to-top-btn"><a href="#the-top"><IoIosArrowDropupCircle /></a></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar