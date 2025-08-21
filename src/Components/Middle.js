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
            <li className="right-floating-links-box"><a title="My stackoverflow profile" href="https://stackoverflow.com/users/9532910/antsamotady"><ImStackoverflow /></a></li>
            <li className="right-floating-links-box"><a title="My github profile" href="https://github.com/Antsamotady"><BsGithub /></a></li>
            <li className="right-floating-links-box"><a title="Email me" href="mailto:tsilavinarj02@gmail.com?subject=Interested%20visitor&body=Hi%20Garry!"><SiGmail /></a></li>
          </ul>
        </div>
      </div>
        <div className="app-container">
        <div className="app-container">
          <div className="middle-info-box">
            <div className="info-box-item">A passionate Back-end Developer with expertise in Symfony, Laravel, and Prestashop</div>
            <div className="info-box-item">Experience in maintaining, evolving, and developing large-scale projects across multiple platforms</div>
            <div className="info-box-item">A problem-solver, skilled in API management, data processing, and secure system architecture</div>
            <div className="info-box-item">Continuously upgrading my skills with the latest technologies, from Symfony 2 to 6.4</div>
            <div className="info-box-item">Dedicated to optimizing performance, debugging, and ensuring seamless user experiences</div>
            <div className="info-box-item">Driven by innovation, with a keen interest in automation, Docker, and containerization</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Middle