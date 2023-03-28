import React from 'react';

import { TfiLinkedin } from 'react-icons/tfi';
import { ImStackoverflow } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

import '../Stylesheets/footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="app-container">
        <div className="footer-body">
          <div className="footer-logo">LOGO</div>
          <div className="line-column">
            <span>Rem ipsum</span>
            <span>Mdf  ipsum</span>
            <span>Lorem ips um</span>
            <span>Norem ipsum</span>
            <span>Lordfsem ipsvcv um</span>
            <span>fgdg  em ipsc</span>
          </div>
          <div className="line-column to-center">
            <span>dsLorem ipsum</span>
            <span>Lorem ipsudfd m</span>
            <span>Vsdf Lorem ipsum</span>
            <span>Lore</span>
            <span>Lordfd em ipsum</span>
            <span>Lorem ipsum</span>
          </div>
          <div className="horizontal-links">
            <ul>
              <li className="bottom-links-box"><a href="https://linkedin.com/in/antsamotady-tsilavina-618201153"><TfiLinkedin /></a></li>
              <li className="bottom-links-box"><a href="https://stackoverflow.com/users/9532910/antsamotady"><ImStackoverflow /></a></li>
              <li className="bottom-links-box"><a href="https://github.com/Antsamotady"><BsGithub /></a></li>
              <li className="bottom-links-box"><a href="mailto:tsilavinarj02@gmail.com?subject=Interested%20visitor&body=Hi%20Garry!"><SiGmail /></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="dedicace"></div>
          <div className="author-part">
            <span className="anarana">RAJAONARISON</span>
            <span className="fanampinanarana">Garry Hasintsilavina</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer