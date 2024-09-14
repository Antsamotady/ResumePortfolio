import React, { useRef, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { IoIosArrowDropupCircle } from 'react-icons/io';

import '../Stylesheets/navbar.css';
import '../Stylesheets/theme-radio.css';
import '../Stylesheets/the-4-color-formula.css';

import tsifoh from '../Images/Tsifoh_224.jpg';


function Navbar({ onLinkClick, onCloseMenu, toggleMenu, onThemeSelected, theme }) {

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [hue, setHue] = useState(332);
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
              {/* <svg onClick={toggleDarkMode} id="dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
              </svg> */}
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

  // function updateHue(hue) {
  //   hueSlider.value = hue;
  //   hueValueInput.value = hue;
  //   document.documentElement.style.setProperty('--hue', hue);
  //   hue = Number(hue);
  //   let ahue = hue + 60;;
  //   let a2hue = hue + 300;

  //   if (hue > 300) {
  //     ahue = hue + 60 - 360;
  //   }

  //   if (hue > 60) {
  //     a2hue = hue + 300 - 360;
  //   }

  // }
}

export default Navbar