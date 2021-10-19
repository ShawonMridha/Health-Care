import React from 'react';
import { Carousel } from 'react-bootstrap';
import nursing1 from '../images/nursing.jpg';
import nursing2 from '../images/nursing2.jpg';
import nursing3 from '../images/nursing3.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel>
  <Carousel.Item  className="small">
    <img
      className="d-block w-100"
      src={nursing1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  className="small">
    <img
      className="d-block w-100 "
      src={nursing2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  className="small">
    <img
      className="d-block w-100 "
      src={nursing3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;