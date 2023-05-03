import React from 'react';
import { Container } from 'react-bootstrap';
import RestaurantCarousel from './Carousel/RestaurantCarousel';
import ChefCard from '../Features/Chef/ChefCard';
import Gallery from '../Gallery/Gallery';
import FoodOffer from '../FoodOffer/FoodOffer';
import Chef from '../Chef/Chef';

const Home = () => {
    return (
        <Container>
           
            <RestaurantCarousel></RestaurantCarousel>
            <Chef></Chef>
            <Gallery></Gallery>
            <FoodOffer></FoodOffer>
        </Container>
    );
};

export default Home;