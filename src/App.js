import React, { useEffect, useRef } from 'react';
import './App.css';
import { Placeholder, Carousel } from 'rsuite'
import NavbarComponent from './components/NavbarComponent.js';
import CarouselComponent from './components/CarouselComponent';

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
        <div className='contentLit'>
          <h1 className='sectionHeader'>
           Welcome To My Portfolio!
          </h1>
        <p className='para'>Extremely skilled and charismatic performer with a certificate from a coding bootcamp. I'm a full stack developer interested in using technology as a tool for creativity. </p>
        </div>
      </div>
      <div id='projectsContent' ref={projectsRef}>
        <div className='contentLit'>
        <h1 className='sectionHeader'>Projects</h1>
        <div id='caroDiv'>
         <CarouselComponent />
          </div>
        </div>
      </div>
      <div ref={techRef} id='technologiesContent'>
        <div className='contentLit'>
        <h1 className='sectionHeader'>Technologies</h1>
        <Placeholder.Paragraph style={{ marginTop: 30 }} rows={5} graph="image" active />
        </div>
      </div>
      <div ref={aboutRef} id='aboutContent'>
        <div className='contentLit'>
        <h1 className='sectionHeader'>About</h1>
          <p className='para'>I’ve been in acting, writing and producing live and televised comedy for ten years. I’m excited to combine my communication/writing skills with software engineering to help creative people make more and better art.</p>
        </div>
      </div>
      <div ref={contactRef} id='contactContent'>
        <div className='contentLit'>
        <h1 className='sectionHeader'>Contact</h1>
        <Placeholder.Paragraph style={{ marginTop: 30 }} rows={5} graph="image" active />
        </div>
      </div>
    </div>
  );
}

export default App;
