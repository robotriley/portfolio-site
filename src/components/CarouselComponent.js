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
          <h1>STORY OUTLINER <StoryOutlinerDrawer /></h1>
        </div>
        <div className='carouselSlide'>
          <h1>REVIEW HAIKUS <ReviewHaikuDrawer /></h1>
        </div>
        <div className='carouselSlide'>
          <h1>TROLL SIMULATOR <TrollSimulatorDrawer /></h1>
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselComponent ; 