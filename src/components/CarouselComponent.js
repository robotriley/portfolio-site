import React from 'react';
import '../App.css';
import { Carousel} from 'rsuite'
import StoryOutlinerDrawer from './StoryOutlinerDrawer';
import TrollSimulatorDrawer from './TrollSimulatorDrawer';
import ReviewHaikuDrawer from './ReviewHaikuDrawer';

const CarouselComponent = () => {
  return (
    <div>
      <Carousel autoplay autoplayInterval={4000} className="custom-slider">
        <h1>STORY OUTLINER <StoryOutlinerDrawer /></h1>
        <h1>REVIEW HAIKUS <ReviewHaikuDrawer /></h1>
        <h1>TROLL SIMULATOR<TrollSimulatorDrawer /></h1>
      </Carousel>
    </div>
  )
}

export default CarouselComponent ; 