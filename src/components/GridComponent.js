import React from 'react';
import '../App.css';
import { Grid, Row, Col } from 'rsuite'

const GridComponent = () => {
  return (
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
      
  
    
  )
}

export default GridComponent; 