import React, { useEffect, useRef } from 'react';
import './App.css';
import { Placeholder } from 'rsuite'
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
      <div id='welcomeContent' ref={welcomeRef}>
        <h1 className='sectionHeader'>
          Welcome to my Portfolio!
        </h1>
        <Placeholder.Paragraph style={{ marginTop: 30 }} rows={5} graph="image" active />
      </div>
      <div id='projectsContent' ref={projectsRef}>
        <h1 className='sectionHeader'>Projects</h1>
        <Placeholder.Paragraph style={{ marginTop: 30 }} rows={5} graph="image" active />
      </div>
      <div ref={techRef} id='technologiesContent'>
        <h1 className='sectionHeader'>Technologies</h1>
        <Placeholder.Paragraph style={{ marginTop: 30 }} rows={5} graph="image" active />
      </div>
      <div ref={aboutRef} id='aboutContent'>
        <h1 className='sectionHeader'>About</h1>
        <Placeholder.Paragraph style={{ marginTop: 30 }} rows={5} graph="image" active />
      </div>
      <div ref={contactRef} id='contactContent'>
        <h1 className='sectionHeader'>Contact</h1>
        <Placeholder.Paragraph style={{ marginTop: 30 }} rows={5} graph="image" active />
      </div>
    </div>
  );
}

export default App;
