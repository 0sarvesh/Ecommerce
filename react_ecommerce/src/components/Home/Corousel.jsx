import React, { useState, useEffect, useRef } from 'react';
import './Corousel.css'; // Import CSS file for styling
import data from '../../db/data';
import banner from '../../assets/banner.webp'
import shoe from '../../assets/shoe.png'
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null); // Ref to hold the carousel element

  // Calculate total slide width considering duplicates for infinite scrolling
  const totalSlideWidth = data.length * 300; // Adjust width as needed (assuming slides are 300px wide)

  const handleNext = () => {
    const carousel = carouselRef.current;
    const slideWidth = carousel.offsetWidth; // Get carousel width

    // Check if end is reached
    if (currentIndex === data.length - 1) {
      carousel.scrollTo({ left: 0, behavior: 'smooth' }); // Scroll to beginning smoothly
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }
  };

  const handlePrev = () => {
    const carousel = carouselRef.current;
    const slideWidth = carousel.offsetWidth; // Get carousel width

    // Check if beginning is reached
    if (currentIndex === 0) {
      carousel.scrollTo({ left: totalSlideWidth - slideWidth, behavior: 'smooth' }); // Scroll to end smoothly
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    }
  };

  return (
    <>     <h3 className='titles'>Our Collections</h3>
    <div className="carousel-container" ref={carouselRef}>
 
        <button className="carousel-button" onClick={handlePrev}>&#8249;</button>
        <div className="carousel-wrapper">
          
        <div
          className="carousel-slide"
          style={{ transform: `translateX(-${currentIndex * 300}px)` }}
        >
          {data.map((item, index) => (
            <div key={index} className="carousel-item">
              <img src={item.img} alt={item.title} className="carousel-image" />
              <p className="carousel-caption">{item.title}</p>
            </div>
          ))}
          {/* Duplicate the slides to create an infinite loop */}
          {data.map((item, index) => (
            <div key={index + data.length} className="carousel-item">
              <img src={item.img} alt={item.title} className="carousel-image" />
              <p className="carousel-caption">{item.title}</p>
            </div>
          ))}
          {/* Duplicate the slides to create an infinite loop */}
          {data.map((item, index) => (
            <div key={index + data.length} className="carousel-item">
              <img src={item.img} alt={item.title} className="carousel-image" />
              <p className="carousel-caption">{item.title}</p>
            </div>
          ))}
                  {/* Duplicate the slides to create an infinite loop */}
          {data.map((item, index) => (
            <div key={index + data.length} className="carousel-item">
              <img src={item.img} alt={item.title} className="carousel-image" />
              <p className="carousel-caption">{item.title}</p>
            </div>
          ))}
                  {/* Duplicate the slides to create an infinite loop */}
          {data.map((item, index) => (
            <div key={index + data.length} className="carousel-item">
              <img src={item.img} alt={item.title} className="carousel-image" />
              <p className="carousel-caption">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-button" onClick={handleNext}>&#8250;</button>
      </div>
      
      <div className="banner">
 <img src={banner} alt=""/>
 <img src={banner} alt=""/>
 <img src={banner} alt=""/>
     

      </div>
     
  </>
      );
}

export default Carousel;
