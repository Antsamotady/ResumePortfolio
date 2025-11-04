import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';

import { TfiLinkedin } from 'react-icons/tfi';
import { ImStackoverflow } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';


import '../Stylesheets/middle.css';

function Middle() {
  const { t } = useLanguage();

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
            <div className="info-box-item">{t('middleParagItem1')}</div>
            <div className="info-box-item">{t('middleParagItem2')}</div>
            <div className="info-box-item">{t('middleParagItem3')}</div>
            <div className="info-box-item">{t('middleParagItem4')}</div>
            <div className="info-box-item">{t('middleParagItem5')}</div>
            <div className="info-box-item">{t('middleParagItem6')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Middle