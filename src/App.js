import React, { useEffect, useRef } from 'react';
import './App.css';
import { Navbar, Nav, Button} from 'rsuite'
import NavbarComponent from './components/NavbarComponent.js';

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
      {/* <Navbar appearance='subtle' id="navbar">
        <Navbar.Brand onClick={ handleWelcomeClick } >Riley Soloner</Navbar.Brand>
        <Nav>
          <Nav.Item onClick={ handleProjectsClick }>Projects</Nav.Item>
          <Nav.Item onClick={ handleTechClick }>Technologies</Nav.Item>
          <Nav.Item onClick={ handleAboutClick } >About</Nav.Item>
          <Nav.Item onClick={ handleContactClick} >Contact</Nav.Item>
        </Nav>
        <Nav pullRight id="iconZone">
          <Button className='navIcon'
                  appearance="link"
                  href="https://github.com/robotriley/"
                  target='blank' >
            <ion-icon className="ionIcon"
                      name="logo-github"
                      size="large">
            </ion-icon>
          </Button>
          <Button className='navIcon'
                  appearance="link"
                  href="https://www.linkedin.com/in/riley-soloner/"
                  target='blank' >
            <ion-icon className="ionIcon"
                      name="logo-linkedin"
                      size="large">
            </ion-icon>
          </Button>
          <Button className='navIcon'
                  appearance="link"
                  href="https://www.medium.com/@rileysoloner/"
                  target='blank'>
            <ion-icon className="ionIcon"
                      name="logo-medium"
                      size="large">
            </ion-icon>
          </Button>
        </Nav>
      </Navbar> */}
      <div id='welcomeContent' ref={welcomeRef}>
        <h3>
          Welcome to my Portfolio site
        </h3>
      </div>
      <div id='projectsContent' ref={projectsRef}>
      <h3>
        Projects
      </h3>
      </div>
      <div ref={techRef} id='technologiesContent'>
        <h3>Technologies</h3>
      </div>
      <div ref={aboutRef} id='aboutContent'>
        <h3>About</h3>
      </div>
      <div ref={contactRef} id='contactContent'>
        <h3>Contact</h3>
      </div>
    </div>
  );
}

export default App;
