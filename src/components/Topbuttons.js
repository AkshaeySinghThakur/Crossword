import React from 'react'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
function Topbuttons() {
  return (
    <div className='container'>
      <img src='./images/Top.jpg' alt=''/>
      <img src='./images/Newarrivals.jpg' alt=''/>
      <img src='./images/Author.jpg' alt=''/>
      <img src='./images/Prebook.jpg' alt=''/>
      <Container>
      <Row>
        <Col>
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/Bookslide1.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/Bookslide2.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/Bookslide3.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
        </Col>
        <Col>
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/BookmarkSlide1.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/BookmarkSlide2.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/BookmarkSlide3.jpg"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel></Col>
      </Row>
      <h2 className='bg-warning mt-2'>Best of 2022</h2>
      </Container>

    </div>
  )
}

export default Topbuttons
