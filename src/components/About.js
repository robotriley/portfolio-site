import React from 'react';
import '../App.css';
import MoreDrawer from './MoreDrawer';
import ResumeDrawer from './ResumeDrawer';

const About = () => {
  return (
    <div className='contentLit'>
      <h1 className='sectionHeader'>About</h1>
      <p className='para'>I'm a Full Stack Software Engineer! With a background in live/televised comedy,
       I am used to working in collaborative environments and communicating clearly. 
       I’m excited to combine my skills and experience with software engineering to help creative 
        people make more and better art.<MoreDrawer /><br /> <ResumeDrawer /></p>
    </div>
  
  )
}

export default About; 