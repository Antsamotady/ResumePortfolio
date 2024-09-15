import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../../Images/img1.png';
import img2 from '../../Images/Neh_9_20.jpg';
import img3 from '../../Images/II_Tim_4.5.png';
import img4 from '../../Images/TL_texture.png';
import img5 from '../../Images/Sal_122.7.png';
import img6 from '../../Images/logo_texture_2.png';

const Gallerie = () => {
  return (
    <div className="gallerie carousel-wrapper">
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
  );
}

export default Gallerie;