import React, { useRef, useEffect, useState } from 'react';

import { TfiLinkedin } from 'react-icons/tfi';
import { ImStackoverflow } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { FiDribbble } from 'react-icons/fi';


import '../Stylesheets/middle.css';

function Middle() {

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="middle">
      <div ref={sectionRef} className={isVisible ? 'visible' : 'hidden'}>
        <div className="right-floating-links_container">
          <ul>
            <li className="right-floating-links-box"><a title="My linkedIn profile" href="https://linkedin.com/in/garry-hasintsilavina"><TfiLinkedin /></a></li>
            <li className="right-floating-links-box"><a title="My linkedIn profile" href="https://dribbble.com/Antsamotady"><FiDribbble /></a></li>
            <li className="right-floating-links-box"><a title="My stackoverflow profile" href="https://stackoverflow.com/users/9532910/antsamotady"><ImStackoverflow /></a></li>
            <li className="right-floating-links-box"><a title="My github profile" href="https://github.com/Antsamotady"><BsGithub /></a></li>
            <li className="right-floating-links-box"><a title="Email me" href="mailto:tsilavinarj02@gmail.com?subject=Interested%20visitor&body=Hi%20Garry!"><SiGmail /></a></li>
          </ul>
        </div>
      </div>
        <div className="app-container">
          <div className="middle-info-box">
            <div className="info-box-item">Genuine introvert, I am deeply passionate about design</div>
            <div className="info-box-item">From drawing to typography and beyond</div>
            <div className="info-box-item">Adventurous tech enthusiast always eager to embrace the unknown</div>
            <div className="info-box-item">Limits are always pushed beyond</div>
            <div className="info-box-item">Multidisciplinary professional with a strong ability to focus on solving complex problems</div>
            <div className="info-box-item">Atypical interests fueled by a vivid imagination</div>
        </div>
      </div>
    </div>
  )
}

export default Middle