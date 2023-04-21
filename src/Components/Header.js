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
              <h1>Garry Hasintsilavina</h1>
              <div className="underlining"></div>
              <p>Introverted Web Developer and Tech Enthusiast with a Passion for Design</p>
              <button><a title="My gallerie" href="https://test-tsl-portfolio.netlify.app/">More</a></button>
            </div>
          </div>
          <div className="right-side">
            <div className="right-side-container carousel-wrapper">
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
