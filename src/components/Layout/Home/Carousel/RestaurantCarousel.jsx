import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import image1 from '../../../../assets/images/happy-african-american-chef-holding-plate-cooked-steak-vegetables-restaurant-kitchen-129307283.jpg';
import image2 from '../../../../assets/images/chef_carousel (2).jpg';
import image3 from '../../../../assets/images/chef_carousel (3).jpg';


function RestaurantCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 vh-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <Container>
            <h3>First slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 vh-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <Container>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 vh-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <Container>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default RestaurantCarousel;
