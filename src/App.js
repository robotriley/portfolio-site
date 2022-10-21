import React, { useEffect } from 'react';
import './App.css';
import { Navbar, Nav, Button} from 'rsuite'
import HomeIcon from '@rsuite/icons/legacy/Home';

const Example = () => {
  useEffect(() => {
    document.title = 'Riley Soloner';
  });
}



function App() {
  Example()
  return (
    <div className="App">
      <Navbar id="navbar">
        <Navbar.Brand href='#'>Riley Soloner</Navbar.Brand>
        <Nav>
          <Nav.Item icon={ <HomeIcon /> }>Projects</Nav.Item>
          <Nav.Item>Technologies</Nav.Item>
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
      <h3>
        Riley Soloner's Portfolio
      </h3>
    </div>
  );
}

export default App;
