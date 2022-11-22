import React from 'react';
import '../App.css';
import { Carousel} from 'rsuite'
import StoryOutlinerDrawer from './StoryOutlinerDrawer';
import TrollSimulatorDrawer from './TrollSimulatorDrawer';
import ReviewHaikuDrawer from './ReviewHaikuDrawer';

const CarouselComponent = () => {
  return (
    <div>
      <Carousel
        className="custom-slider"
        placement="bottom"
        shape="bar">
        <div className='carouselSlide'>
          <h1>STORY OUTLINER </h1>
          <h3>streamline your story writing process</h3>
          <iframe width="500" height="281" src="https://www.youtube.com/embed/U5DdcyA72Y0?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          {/* <StoryOutlinerDrawer /> */}
        </div>
        <div className='carouselSlide'>
          <h1>REVIEW HAIKUS <ReviewHaikuDrawer /></h1>
        </div>
        <div className='carouselSlide'>
          <h1>TROLL SIMULATOR</h1>
          <h3>choose your troll adventure</h3>
          <iframe width="500" height="281" src="https://www.youtube.com/embed/Y2jxvthfZIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          {/* <TrollSimulatorDrawer /> */}
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselComponent ; 