import React, { useRef, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { useLanguage } from '../LanguageContext';

import '../Stylesheets/navbar.css';
import '../Stylesheets/theme-radio.css';
import '../Stylesheets/the-4-color-formula.css';
import '../Stylesheets/translations.css';

// import tsifoh from '../Images/Tsifoh_224.jpg';
import tsifoh from '../Images/me_portrait_2022_zoomed_sm.jpg';


function Navbar({ onLinkClick, onCloseMenu, toggleMenu, onThemeSelected, theme }) {
  const { t, currentLanguage, switchLanguage } = useLanguage();
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

  const handleLanguageChange = (lang) => {
    switchLanguage(lang);
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
              {/* Language Switcher */}
              <div className="language-switcher">
                <button 
                  className={currentLanguage === 'en' ? 'active' : ''} 
                  onClick={() => handleLanguageChange('en')}
                >
                  EN
                </button>
                <button 
                  className={currentLanguage === 'fr' ? 'active' : ''} 
                  onClick={() => handleLanguageChange('fr')}
                >
                  FR
                </button>
              </div>
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
              <Link to="/about" onClick={onLinkClick}><span>{t('aboutMe')}</span></Link>
              <Link to="/capabilities" onClick={onLinkClick}><span>{t('achievements')}</span></Link>
              <Link to="/contact" onClick={onLinkClick}><span>{t('contactMe')}</span></Link>
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
                  <Link to="/" onClick={onLinkClick}><span className="text-link">{t('home')}</span></Link>
                  <Link to="/about" onClick={onLinkClick}><span className="text-link">{t('aboutMe')}</span></Link>
                  <Link to="/capabilities" onClick={onLinkClick}><span className="text-link">{t('achievements')}</span></Link>
                  <Link to="/contact" onClick={onLinkClick}><span className="text-link">{t('contactMe')}</span></Link>
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