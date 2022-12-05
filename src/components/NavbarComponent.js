import React from 'react';
import '../App.css';
import { Navbar, Nav, Button } from 'rsuite'

const NavbarComponent = ({handleWelcomeClick, handleProjectsClick, handleTechClick, handleAboutClick, handleContactClick }) => {
  return (
    <div>
      <Navbar appearance='subtle' id="navbar">
        <div id='navContent'>
        <Navbar.Brand onClick={handleWelcomeClick} >Riley Soloner</Navbar.Brand>
        <Nav>
          <Nav.Item onClick={handleProjectsClick}>Projects</Nav.Item>
          <Nav.Item onClick={handleTechClick}>Technologies</Nav.Item>
          <Nav.Item onClick={handleAboutClick} >About</Nav.Item>
          <Nav.Item onClick={handleContactClick} >Contact</Nav.Item>
        </Nav>
        </div>
        <Nav pullRight id="iconZone">
          <Button className='navIcon'
            appearance='link'
            href='Riley_Soloner_Resume_Shared.pdf'
            target='blank'>
            <ion-icon className="ionIcon"
              name='document-text-sharp'
              size='large'>
            </ion-icon>
          </Button>
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
    </div>
  )
}

export default NavbarComponent ; 