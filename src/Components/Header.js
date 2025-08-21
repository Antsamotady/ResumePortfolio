import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import '../Stylesheets/header.css';

import img1 from '../Images/img1.png';
import img2 from '../Images/Neh_9_20.jpg';
import img3 from '../Images/II_Tim_4.5.png';
import img4 from '../Images/TL_texture.png';
import img5 from '../Images/Sal_122.7.png';
import img6 from '../Images/logo_texture_2.png';


function Header() {
  return (
    <div className="header">
      <div className="app-container">
        <div className="header-body">
          <div className="left-side">
            <div className="left-side-container">
              <h1><span>Garry</span><span>Hasintsilavina</span></h1>
              <div className="underlining"></div>
              <p>Back-end wizard in the shadows, turning code into seamless systems - and I may occasionally make things look pretty too!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
