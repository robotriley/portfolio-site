import React, { useEffect, useRef } from 'react';
import './App.css';
import { Navbar, Nav, Button} from 'rsuite'
import HomeIcon from '@rsuite/icons/legacy/Home';

const Title = () => {
  useEffect(() => {
    document.title = 'Riley Soloner';
  });
}

const App = () => {
  const titleRef = useRef()
  const projectsRef = useRef()
  const techRef = useRef()

  const handleTitleClick = () => {
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleTechClick = () => {
    techRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  Title()

  return (
    <div className="App">
      <Navbar appearance='subtle' id="navbar">
        <Navbar.Brand onClick={ handleTitleClick } href='#'>Riley Soloner</Navbar.Brand>
        <Nav>
          <Nav.Item ref={projectsRef} onClick={ handleProjectsClick } icon={ <HomeIcon /> }>Projects</Nav.Item>
          <Nav.Item ref={techRef} onClick={ handleTechClick }>Technologies</Nav.Item>
          <Nav.Item>About</Nav.Item>
          <Nav.Item>Contact</Nav.Item>
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
      </Navbar>
      <div id='projectsContent'>
      <h3>
        Projects
      </h3>
      </div>
      <div ref={titleRef} id='technologiesContent'>
        <h3>Technologies</h3>
      </div>
    </div>
  );
}

export default App;
