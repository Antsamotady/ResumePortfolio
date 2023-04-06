import React from 'react';

import '../../Stylesheets/about.css'
import profile from '../../Images/glitch_1_1.png';
import celaneo from '../../Images/celaneo.png';
import autobiz from '../../Images/autobiz.png';
import oti from '../../Images/oti.png';


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
            <p className="name-underlining"></p>
            <p className="parag">
              As a true introvert, I have a deep passion for design in all its forms - from drawing to typography and beyond. I am also a tech enthusiast and love exploring new gadgets and software, which is why I enjoy watching sci-fi movies. I have developed a strong proficiency in utilizing PHP Symfony framework and Laravel through my recent experience as a web developer.
            </p>
          </div>
          <div className="bottom-text">
            <span>I've been a...</span>
            <div className="small-titles">
              <div className="work-experience">
                <p>Web developer</p>
                <a href="https://www.celaneo.com/"><img className="company-logo" src={celaneo} alt="" /></a>
              </div>
              <div className="work-experience">
                <p>Web scraper</p>
                <a href="http://corporate.autobiz.com/"><img className="company-logo" src={autobiz} alt="" /></a>
              </div>
              <div className="work-experience">
                <p>CIO Assistant</p>
                <a href="https://oti-madagascar.net/"><img className="company-logo" src={oti} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;