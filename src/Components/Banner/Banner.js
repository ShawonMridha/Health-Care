import React from 'react';
import { Carousel } from 'react-bootstrap';
import nursing1 from '../images/nursing.jpg';
import nursing2 from '../images/nursing2.jpg';
import nursing3 from '../images/nursing3.jpg';


const Banner = () => {
    return (
        <>
           <Carousel fade className=''>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={nursing1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>service for everyone patient</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={nursing2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>service for everyone patient</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={nursing3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>service for everyone patient</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;