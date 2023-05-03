import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetail = useLoaderData()
    const {chefName,chefPicture} = chefDetail;
    console.log(chefDetail);
    return (
        <Container>
            <h3 className='text-center'>Chef Details</h3>
           <div className='d-flex justify-content-between'>
           <img style={{ height: '200px', width: '300px' }}src={chefPicture} alt="" />
            <h4>{chefName}</h4>
           </div>
        </Container>
    );
};

export default ChefDetails;