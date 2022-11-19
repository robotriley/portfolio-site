import React from 'react';
import '../App.css';
import { Carousel} from 'rsuite'
import StoryOutlinerDrawer from './StoryOutlinerDrawer';
import TrollSimulatorDrawer from './TrollSimulatorDrawer';
import ReviewHaikuDrawer from './ReviewHaikuDrawer';

const CarouselComponent = () => {
  return (
    <div>
      <Carousel className="custom-slider">
        <div className='carouselSlide'>
          <h1>STORY OUTLINER </h1>
          <h3>streamline your story writing process</h3>
          <StoryOutlinerDrawer />
        </div>
        <div className='carouselSlide'>
          <h1>REVIEW HAIKUS <ReviewHaikuDrawer /></h1>
        </div>
        <div className='carouselSlide'>
          <h1>TROLL SIMULATOR</h1>
          <h3>choose your troll adventure</h3>
          <TrollSimulatorDrawer />
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselComponent ; 