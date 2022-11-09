import React from 'react';
import '../App.css';
import { Carousel } from 'rsuite'

const CarouselComponent = ({handleWelcomeClick, handleProjectsClick, handleTechClick, handleAboutClick, handleContactClick }) => {
  return (
    <div>
      <Carousel autoplay autoplayInterval={4000} className="custom-slider">
        <h1>This is where STORY OUTLINER is gonna go</h1>
        <h1>This one is for Review Haikus</h1>
        <h1>This one is for TROLL SIMULATOR</h1>
      </Carousel>
    </div>
  )
}

export default CarouselComponent ; 