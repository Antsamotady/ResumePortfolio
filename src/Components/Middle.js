import React, { useRef, useEffect, useState } from 'react';

import { TfiLinkedin } from 'react-icons/tfi';
import { ImStackoverflow } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

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
            <li className="right-floating-links-box"><a href="https://linkedin.com/in/antsamotady-tsilavina-618201153"><TfiLinkedin /></a></li>
            <li className="right-floating-links-box"><a href="https://stackoverflow.com/users/9532910/antsamotady"><ImStackoverflow /></a></li>
            <li className="right-floating-links-box"><a href="https://github.com/Antsamotady"><BsGithub /></a></li>
            <li className="right-floating-links-box"><a href="mailto:tsilavinarj02@gmail.com?subject=Interested%20visitor&body=Hi%20Garry!"><SiGmail /></a></li>
          </ul>
        </div>
      </div>
        <div className="app-container">
          <div className="middle-info-box">
            <div className="info-box-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur similique, blanditiis officia provident in maxime?</div>
            <div className="info-box-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur similique, blanditiis officia provident in maxime?</div>
            <div className="info-box-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur similique, blanditiis officia provident in maxime?</div>
            <div className="info-box-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur similique, blanditiis officia provident in maxime?</div>
            <div className="info-box-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur similique, blanditiis officia provident in maxime?</div>
            <div className="info-box-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur similique, blanditiis officia provident in maxime?</div>
        </div>
      </div>
    </div>
  )
}

export default Middle