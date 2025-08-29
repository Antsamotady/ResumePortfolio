import React from 'react';


import tsifoh from '../Images/Tsifoh_224.jpg';
import { TfiLinkedin } from 'react-icons/tfi';
import { ImStackoverflow } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';

import '../Stylesheets/footer.css';

function Footer({ onGallerieLinkClick }) {
  const now = new Date();
  const month = now.toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();

  return (
    <div className="app-footer">
      <div className="footer-body">
        <div className="footer-logo">
          <Link to="/"><img className="tsifoh-logo-footer" src={tsifoh} alt="" /></Link>
        </div>
        <div className="line-column to-center">
          <span>Introvert</span>
          <span><a title="My design showcase" href="https://tsl-portfolio.netlify.app/">Other project</a></span>
          <span>Tech enthusiast</span>
          <span>Creative</span>
          <span>IT roles</span>
          <Link to="/gallerie" className="gallerie-link" >
            <span onClick={onGallerieLinkClick}>Gallerie</span>
          </Link>
          <span>Client-focused</span>
        </div>
        <div className="line-column to-center">
          <span>Web development</span>
          <span>PHP</span>
          <span>Symfony framework</span>
          <span>Laravel</span>
          <span>Reactjs</span>
          <span>Linux</span>
          <span>Bash scripting</span>
        </div>
        <div className="horizontal-links">
          <ul>
            <li className="bottom-links-box"><a title="My linkedIn profile" href="https://linkedin.com/in/garry-hasintsilavina"><TfiLinkedin /></a></li>
            <li className="bottom-links-box"><a title="My stackoverflow profile" href="https://stackoverflow.com/users/9532910/antsamotady"><ImStackoverflow /></a></li>
            <li className="bottom-links-box"><a title="My github profile" href="https://github.com/Antsamotady"><BsGithub /></a></li>
            <li className="bottom-links-box"><a title="Email me" href="mailto:tsilavinarj02@gmail.com?subject=Interested%20visitor&body=Hi%20Garry!"><SiGmail /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="dedicace"></div>
        <div className="author-part">
          <span className="anarana">RAJAONARISON</span>
          <span className="fanampinanarana">Garry Hasintsilavina - {month} {year}</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
