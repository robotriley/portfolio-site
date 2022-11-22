import React from 'react';
import '../App.css';
import { Carousel, Button} from 'rsuite'
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
          <iframe width="560" height="428" src="https://www.youtube.com/embed/U5DdcyA72Y0?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='allowfullscreen'></iframe>
          <Button color="blue"
                  appearance='primary'
                  size="lg"
                  target="_blank"
                  href="https://github.com/robotriley/story-outliner">
            <ion-icon name="logo-github"></ion-icon>
            Github
          </Button>
        </div>
        <div className='carouselSlide'>
          <h1>REVIEW HAIKUS</h1>
          <h3>A fun website where <br /> All of the movie reviews <br />are haiku poems</h3>
          <Button color="blue"
            appearance='primary'
            target="_blank"
            href="https://github.com/robotriley/review-haiku-backend">
            <ion-icon name="logo-github"></ion-icon>
            Github
          </Button>
        </div>
        <div className='carouselSlide'>
          <h1>TROLL SIMULATOR</h1>
          <h3>choose your troll adventure</h3>
          <iframe width="560" height="428" src="https://www.youtube.com/embed/Y2jxvthfZIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='allowfullscreen'></iframe>
          <Button color="blue"
                  appearance='primary'
                  size='lg'
                  target="_blank"
                  href="https://github.com/robotriley/troll-builder">
            <ion-icon name="logo-github"></ion-icon>
            Github
          </Button>
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselComponent ; 