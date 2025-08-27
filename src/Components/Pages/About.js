import React from 'react';

import '../../Stylesheets/about.css'
import profile from '../../Images/glitch_1_1.png';
import celaneo from '../../Images/celaneo.png';
import autobiz from '../../Images/autobiz.png';
import softibox from '../../Images/logo_softibox1.png';
import oti from '../../Images/oti.png';
import certificate from '../../Images/English_certif.jpg';


function About() {
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
            <p className="parag">
              As a proud introvert, I thrive behind the screen, transforming complex code into seamless back-end solutions. My passion for design spans from sketches to typography, but it's the logic and structure of back-end development that truly excites me. A true tech enthusiast, I'm always exploring new gadgets, software, and geeky sci-fi movies. Over the years, I've honed my skills in PHP, Symfony, and Laravel, building robust systems and scalable applications that power digital experiences.
            </p>
          </div>
        </div>
      </div>

      <p className="section-underlining"></p>

      <div className="text-container">
        <div className="bottom-text">
          <span>Present day, I'm a</span>
          <div className="small-titles">
            <div className="work-experience">
              <div className='experience-title'>Backend developer</div>
              <a title="Official site" href="https://www.softibox.com/"><img className="company-logo" src={softibox} alt="" /></a>
            </div>
          </div>
        </div>

        <div className="bottom-text">
          <span>I've been</span>
          <div className="small-titles">
            <div className="work-experience">
              <div className='experience-title'>Web developer</div>
              <a title="Official site" href="https://www.celaneo.com/"><img className="company-logo" src={celaneo} alt="" /></a>
            </div>
            <div className="work-experience">
              <div className='experience-title'>Web scraper</div>
              <a title="Official site" href="http://corporate.autobiz.com/"><img className="company-logo" src={autobiz} alt="" /></a>
            </div>
            <div className="work-experience">
              <div className='experience-title'>CIO Assistant</div>
              <a title="Official site" href="https://oti-madagascar.net/"><img className="company-logo" src={oti} alt="" /></a>
            </div>
          </div>
        </div>

        <p className="quater-underlining"></p>

        <div className="bottom-text">
          <span>Not far from now</span>
          <div className="updates">
            <div className="update-title-container">
              <p className="update-title">C2 Level English Certification</p>
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