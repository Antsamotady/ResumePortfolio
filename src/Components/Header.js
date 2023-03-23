import React from 'react'

import '../Stylesheets/header.css';

import img1 from '../Images/img1.png';

function Header() {
  return (      
    <div className="header">
      <div className="container">
        <div className="primary-header">
          <span className="logo">LOGO</span>
          <div className="menu">
            <a href="#">About me</a>
            <a href="#">Capabilities</a>
            <a href="#">Contact me</a>
          </div>
        </div>
        <div className="header-body">
          <div className="left-side">
            <div className="left-side-container">
              <a href="#">
                <h5>Speakers</h5>
                <h3>World-Class Speakers</h3>
              </a>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, veritatis.</p>
            </div>
          </div>
          <div className="right-side">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
