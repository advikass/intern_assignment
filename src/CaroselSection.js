import React from 'react';
import './CaroselSection.css';
import Image from './model.png';

const CaroselSection = () => {
  return (
    <div className="CaroselSection">
      <div className="image-container">
        <img src={Image} alt="Model" />
        <div className="controls">
          <button className="Carosel-btn"><i class="bi bi-arrow-left-short"></i></button>
          <button className="Carosel-btn"><i class="bi bi-eye"></i></button>
          <button className="order-btn">Order Now</button>
          <button className="Carosel-btn"><i class="bi bi-bag"></i></button>
          <button className="Carosel-btn"><i class="bi bi-arrow-right-short"></i></button>
        </div>
      </div>
    </div>
  );
};

export default CaroselSection;
