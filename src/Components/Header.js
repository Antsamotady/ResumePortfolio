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
              <h1>Lorem Ipsum</h1>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta labore iusto illum voluptate quis omnis opti</p>
              <button>More</button>
            </div>
          </div>
          <div className="right-side">
            <div className="right-side-container">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
