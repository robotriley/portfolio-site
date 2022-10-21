import React, { useEffect } from 'react';
import './App.css';
import { Navbar, Nav} from 'rsuite'
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
      <Navbar>
        <Navbar.Brand href='#'>Riley Soloner</Navbar.Brand>
        <Nav>
          <Nav.Item icon={ <HomeIcon /> }>Projects</Nav.Item>
          <Nav.Item>Technologies</Nav.Item>
          <Nav.Item>About</Nav.Item>
          <Nav.Item>Contact</Nav.Item>
        </Nav>
        <Nav pullRight>
          <ion-icon href="https://github.com/robotriley/" name="logo-github" size="large"></ion-icon>
          <ion-icon href="https://https://www.linkedin.com/in/riley-soloner/" name="logo-linkedin" size="large"></ion-icon>
          <ion-icon href="https://https://www.medium.com/@rileysoloner/" name="logo-medium" size="large"></ion-icon>
        </Nav>
      </Navbar>
    </div>
  );
}

export default App;
