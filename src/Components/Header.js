import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

import '../Stylesheets/header.css';

import img1 from '../Images/img1.png';
import img2 from '../Images/Neh_9_20.jpg';
import img3 from '../Images/II_Tim_4.5.png';
import img4 from '../Images/TL_texture.png';
import img5 from '../Images/Sal_122.7.png';
import img6 from '../Images/logo_texture_2.png';

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (      
    <div className="header">
      <div className="app-container">
        <div className="primary-header">
          <span className="logo">LOGO</span>
          <div className="menu-links">
            <a href="#">About me</a>
            <a href="#">Capabilities</a>
            <a href="#">Contact me</a>
          </div>
          <div className="menu-mobile">
            <div className="menu-mobile-icon">
              {toggleMenu
                ? <RiCloseLine className="ri-closeline" size={27} onClick={() => setToggleMenu(false)}/>
                : <RiMenu3Line className="ri-menu3line" size={27} onClick={() => setToggleMenu(true)}/>
              }
            </div>
            {toggleMenu && (
              <div className="menu-mobile-links scale-up-center">
                <a href="#">About me</a>
                <a href="#">Capabilities</a>
                <a href="#">Contact me</a>
              </div>
            )}
          </div>
        </div>
        <div className="header-body">
          <div className="left-side">
            <div className="left-side-container">
              <h1>Lorem Ipsum</h1>
              <div className="underlining"></div>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta labore iusto illum voluptate quis omnis opti</p>
              <button>More</button>
            </div>
          </div>
          <div className="right-side">
            <div className="right-side-container">
              <Carousel indicators={false}>
                <Carousel.Item>
                  <img src={img1} alt="img1" />
                </Carousel.Item>
                <Carousel.Item interval={7000}>
                  <img src={img2} alt="img2" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={img3} alt="img1" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={img4} alt="img2" />
                </Carousel.Item>
                <Carousel.Item interval={7000}>
                  <img src={img5} alt="img1" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={img6} alt="img2" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
