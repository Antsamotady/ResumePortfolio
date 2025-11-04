import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';

import { TfiLinkedin } from 'react-icons/tfi';
import { ImStackoverflow } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

import wpq from '../Images/worldpadelquest-logo.webp';
import myflow from '../Images/myflow.png';
import groupito from '../Images/groupito.png';
import resma from '../Images/resma.png';
import piplanner from '../Images/piplanner.png';
import autobiz from '../Images/autobiz.png';

import '../Stylesheets/middle.css';
import '../Stylesheets/page/listing.css';

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

      <div className="content">
        <ul className="team">
          <li className="member co-funder">
            <div className="thumb"><img src={wpq} alt="" /></div>
            <div className="description">
              <h3>Padelquest</h3>
              <p>{t('middleParagItem1')}<br /><a href="https://www.worldpadelquest.com/">www.worldpadelquest.com</a></p>
            </div>
          </li>
          <li className="member co-funder">
            <div className="thumb"><img src={myflow} alt="" /></div>
            <div className="description">
              <h3>MyFlow</h3>
              <p>{t('middleParagItem2')}<br /><a href="https://my-flow.fr/">my-flow.fr</a></p>
            </div>
          </li>
          <li className="member">
            <div className="thumb"><img src={groupito} alt="" /></div>
            <div className="description">
              <h3>Groupito</h3>
              <p>{t('middleParagItem3')}<br /><a href="https://www.groupito.com/">www.groupito.com</a></p>
            </div>
          </li>
          <li className="member">
            <div className="thumb"><img src={resma} alt="" /></div>
            <div className="description">
              <h3>Resma</h3>
              <p>{t('middleParagItem4')}<br /><a href="https://www.resma.com/">www.resma.com</a></p>
            </div>
          </li>
          <li className="member co-funder">
            <div className="thumb"><img src={piplanner} alt="" /></div>
            <div className="description">
              <h3>PIPlanner</h3>
              <p>{t('middleParagItem5')}<br /><a href="https://pi-motion.fr/">pi-motion.fr</a></p>
            </div>
          </li>
          <li className="member">
            <div className="thumb"><img src={autobiz} alt="" /></div>
            <div className="description">
              <h3>Autobiz</h3>
              <p>{t('middleParagItem6')}<br /><a href="https://vendre.autobiz.fr/">vendre.autobiz.fr</a></p>
            </div>
          </li>
        </ul>
      </div>
      
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
      
    </div>
  )
}

export default Middle