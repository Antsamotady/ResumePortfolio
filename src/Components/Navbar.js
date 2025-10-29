import React, { useRef, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { IoIosArrowDropupCircle } from 'react-icons/io';

import '../Stylesheets/navbar.css';
import '../Stylesheets/theme-radio.css';
import '../Stylesheets/the-4-color-formula.css';

// import tsifoh from '../Images/Tsifoh_224.jpg';
import tsifoh from '../Images/me_portrait_2022_zoomed_sm.jpg';


function Navbar({ onLinkClick, onCloseMenu, toggleMenu, onThemeSelected, theme }) {

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [hue, setHue] = useState(279); // Here is where to set default theme hue
  const [hueValue, setHueValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

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

  useEffect(() => {
    document.documentElement.style.setProperty('--hue', hue);
  }, [hue]);

  const handleSliderChange = (event) => {
    const newHue = event.target.value;
    setHue(newHue);
    setHueValue(newHue);
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <>
      <div className="app-navbar">
        <div className="app-container">
          <div className="primary-header" id="the-top">
            <Link to="/">
              <span className="logo"><img className="tsifoh-logo" src={tsifoh} alt="" /></span>
            </Link>

            <span className="controls">
              <input
                type="range"
                id="hue-slider"
                min="0"
                max="360"
                value={hue}
                onChange={handleSliderChange}
              />
              <button onClick={toggleDarkMode} id="dark"></button>
            </span>

            <div className="menu-links">
              <Link to="/about" onClick={onLinkClick}><span>About me</span></Link>
              <Link to="/capabilities" onClick={onLinkClick}><span>Achievements</span></Link>
              <Link to="/contact" onClick={onLinkClick}><span>Contact me</span></Link>
            </div>

            <div className="menu-mobile">
              <div className="menu-mobile-icon">
                {toggleMenu
                  ? <RiCloseLine className="ri-closeline" size={27} onClick={onCloseMenu} />
                  : <RiMenu3Line className="ri-menu3line" size={27} onClick={onCloseMenu} />
                }
              </div>
              {toggleMenu && (
                <div className="menu-mobile-links scale-up-center">
                  <Link to="/" onClick={onLinkClick}><span className="text-link">Home</span></Link>
                  <Link to="/about" onClick={onLinkClick}><span className="text-link">About me</span></Link>
                  <Link to="/capabilities" onClick={onLinkClick}><span className="text-link">Achievements</span></Link>
                  <Link to="/contact" onClick={onLinkClick}><span className="text-link">Contact me</span></Link>
                </div>
              )}
            </div>
          </div>

          <div ref={sectionRef} className={isVisible ? 'visible' : 'hidden'}>
            <div className="back-to-top-btn"><a href="#the-top"><IoIosArrowDropupCircle /></a></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar