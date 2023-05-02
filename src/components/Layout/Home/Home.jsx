import React from 'react';
import { Container } from 'react-bootstrap';
import RestaurantCarousel from './Carousel/RestaurantCarousel';

const Home = () => {
    return (
        <Container>
           
            <RestaurantCarousel></RestaurantCarousel>
        </Container>
    );
};

export default Home;