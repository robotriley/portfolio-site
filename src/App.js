import React, { useEffect, useRef } from 'react';
import './App.css';
import { Placeholder, Grid, Row, Col } from 'rsuite'
import NavbarComponent from './components/NavbarComponent.js';
import CarouselComponent from './components/CarouselComponent';
import About from './components/About';
import MailToRiley from './components/MailToRiley';

const Title = () => {
  useEffect(() => {
    document.title = 'Riley Soloner';
  });
}
const App = () => {
  const welcomeRef = useRef()
  const projectsRef = useRef()
  const techRef = useRef()
  const aboutRef = useRef()
  const contactRef = useRef()

  const handleWelcomeClick = () => {
    welcomeRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleTechClick = () => {
    techRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  Title()

  return (
    <div className="App">
      <NavbarComponent handleWelcomeClick={handleWelcomeClick}
                       handleProjectsClick={handleProjectsClick}
                       handleTechClick={handleTechClick}
                       handleAboutClick={handleAboutClick}
                       handleContactClick={handleContactClick}
       />
      <div id='sectionContent' ref={welcomeRef}>
        <div className='contentLit'>
          <h1 className='sectionHeader'>
           Welcome To My Portfolio!
          </h1>
        <p className='para'>Extremely skilled and charismatic performer with a certificate from a coding bootcamp. I'm a full stack developer interested in using technology as a tool for creativity. </p>
        </div>
      </div>
      <div id='sectionContent' ref={projectsRef}>
        <div className='contentLit'>
        <h1 className='sectionHeader'>Projects</h1>
        <div id='caroDiv'>
         <CarouselComponent />
          </div>
        </div>
      </div>
      <div ref={techRef} id='sectionContent'>
        <div className='contentLit'>
        <h1 className='sectionHeader'>Technologies</h1>
        <p className='para'>I've worked with...</p>
          <div className="show-grid">
            <Grid className='grid' fluid>
              <Row gutter={8} className="show-grid">
        <p className='techCategory'>Front-End</p>
                <Col sm={40}>JavaScript</Col>
                <Col sm={40}>React</Col>
                <Col sm={40}>HTML</Col>
                <Col sm={40}>CSS</Col>
                </Row>
              <Row gutter={8} className="show-grid">
              <p className='techCategory'>Back-End</p>
                <Col xs={40}>Ruby on Rails</Col>
                <Col xs={40}>SQL/PostGreSQL</Col>
                </Row>
              <Row gutter={8} className="show-grid">
              <p className='techCategory'>Platforms</p>
                <Col xs={40}>Git / Github</Col>
              </Row>
              <Row gutter={8} className="show-grid">
                <p className='techCategory'>Styles</p>
                <Col xs={0}>ReactSuite</Col>
              </Row>
              </Grid>
          </div>
        </div>
      </div>
      <div ref={aboutRef} id='sectionContent'>
        <div className='contentLit'>
        <h1 className='sectionHeader'>About</h1>
        <About />
        </div>
      </div>
      <div ref={contactRef} id='contactContent'>
        <div className='contentLit'>
        <h1 className='sectionHeader'>Contact</h1>
          
          <MailToRiley />
        </div>
      </div>
    </div>
  );
}

export default App;
