import React from 'react';

import '../../Stylesheets/about.css'
import profile from '../../Images/glitch_1_1.png';
import celaneo from '../../Images/celaneo.png';
import autobiz from '../../Images/autobiz.png';
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
              As a true introvert, I have a deep passion for design in all its forms - from drawing to typography and beyond. I am also a tech enthusiast and love exploring new gadgets and software, which is why I enjoy watching sci-fi movies. I have developed a strong proficiency in utilizing PHP Symfony framework and Laravel through my recent experience as a web developer.
            </p>
          </div>
        </div>
      </div>

      <p className="section-underlining"></p>

      <div className="text-container">
        <div className="bottom-text">
          <span>I've been a...</span>
          <div className="small-titles">
            <div className="work-experience">
              <p>Web developer</p>
              <a title="Official site" href="https://www.celaneo.com/"><img className="company-logo" src={celaneo} alt="" /></a>
            </div>
            <div className="work-experience">
              <p>Web scraper</p>
              <a title="Official site" href="http://corporate.autobiz.com/"><img className="company-logo" src={autobiz} alt="" /></a>
            </div>
            <div className="work-experience">
              <p>CIO Assistant</p>
              <a title="Official site" href="https://oti-madagascar.net/"><img className="company-logo" src={oti} alt="" /></a>
            </div>
          </div>
        </div>

        <p className="quater-underlining"></p>

        <div className="bottom-text">
          <span>Recently...</span>
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