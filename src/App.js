import React, { useEffect, useRef } from 'react';
import './App.css';
import { Grid, Row, Col } from 'rsuite'
import NavbarComponent from './components/NavbarComponent.js';
import CarouselComponent from './components/CarouselComponent';
import About from './components/About';
import MailToRiley from './components/MailToRiley';
import GridComponent from './components/GridComponent';

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
        <p className='para'>Skilled and charismatic performer with a certificate from a coding bootcamp. I'm a full stack developer interested in using technology as a tool for creativity. </p>
        <MailToRiley />
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
              <GridComponent />
          </div>
        </div>
      </div>
      <div ref={aboutRef} id='sectionContent'>
        <About />
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
