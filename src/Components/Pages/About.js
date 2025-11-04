import React from 'react';
import { useLanguage } from '../../LanguageContext';

import '../../Stylesheets/about.css'
import profile from '../../Images/glitch_1_1.png';
import celaneo from '../../Images/celaneo.png';
import autobiz from '../../Images/autobiz.png';
import softibox from '../../Images/logo_softibox1.png';
import oti from '../../Images/oti.png';
import certificate from '../../Images/English_certif.jpg';


function About() {  
  const { t } = useLanguage();

  return (
    <div className="app-container">
      <div className="about-me">
        <div className="image-container">
          <img src={profile} alt="" />
        </div>
        <div className="text-container">
          <div className="upper-text">
            <p className="my-name">RAJAONARISON Garry Hasintsilavina</p>
            <p className="quater-underlining"></p>
            <p className="parag">{t('aboutParagHeader')}</p>
          </div>
        </div>
      </div>

      <p className="section-underlining"></p>

      <div className="text-container">
        <div className="bottom-text">
          <span>{t('aboutText1')}</span>
          <div className="small-titles">
            <div className="work-experience">
              <div className='experience-title'>{t('aboutText2')}</div>
              <a title="Official site" href="https://www.softibox.com/"><img className="company-logo" src={softibox} alt="" /></a>
            </div>
          </div>
        </div>

        <div className="bottom-text">
          <span>{t('aboutText3')}</span>
          <div className="small-titles">
            <div className="work-experience">
              <div className='experience-title'>{t('aboutText4')}</div>
              <a title="Official site" href="https://www.celaneo.com/"><img className="company-logo" src={celaneo} alt="" /></a>
            </div>
            <div className="work-experience">
              <div className='experience-title'>{t('aboutText5')}</div>
              <a title="Official site" href="http://corporate.autobiz.com/"><img className="company-logo" src={autobiz} alt="" /></a>
            </div>
            <div className="work-experience">
              <div className='experience-title'>{t('aboutText6')}</div>
              <a title="Official site" href="https://oti-madagascar.net/"><img className="company-logo" src={oti} alt="" /></a>
            </div>
          </div>
        </div>

        <p className="quater-underlining"></p>

        <div className="bottom-text">
          <span>{t('aboutText7')}</span>
          <div className="updates">
            <div className="update-title-container">
              <p className="update-title">{t('aboutText8')}</p>
            </div>
            <div className="image-container">
              <img src={certificate} alt="" />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About;