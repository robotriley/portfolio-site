import React from 'react';
import '../App.css';
import { Carousel } from 'rsuite'

const CarouselComponent = () => {
  return (
    <div>
      <Carousel autoplay autoplayInterval={4000} className="custom-slider">
        <h1>STORY OUTLINER</h1>
        <h1>REVIEW HAIKUS</h1>
        <h1>TROLL SIMULATOR</h1>
      </Carousel>
    </div>
  )
}

export default CarouselComponent ; 